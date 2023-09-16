import { useState } from "react";
import TitleTransactions from "../../components/TitleTransactions";
import "../../styles/transaction.css";
import "../../styles/commomComponents.css";
import useGetCustomHook from "./../../hooks/useGetCustomHook";
import { useNavigate } from "react-router-dom";

const Saque = () => {
  const [value, setValue] = useState(0);
  const { data } = useGetCustomHook();
  const history = useNavigate();
  const date = new Date().toLocaleDateString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });

  function saveHistory(account) {
    const extractBody = {
      tipo: "Saída",
      data: date,
      operacao: "Saque",
      valor: value,
      saldo: data[0].saldo,
    };

    account.extrato.push(extractBody);
    return account;
  }

  function saveSaque() {
    if (
      date === data[0].saque.ultimoSaque &&
      (data[0].saque.valorDiario >= 5000 ||
        data[0].saque.valorDiario + value > 5000)
    ) {
      alert("Limite diário para saque atingido");
      return;
    }

    if (value > 5000) {
      alert("Valor ultrapassa o limite permitido!");
      return;
    }
    else if (value === 0) {
      alert("O valor para saque precisa ser diferente de 0");
      return 
    }

    if (data[0].saldo < value) {
      alert("Você não pode enviar mais dinheiro do que possui.");
      return;
    }

    if (date !== data[0].saque.ultimoSaque && data[0].saque.valorDiario > 0) {
      data[0].saque.valorDiario = value;
    } else {
      data[0].saque.valorDiario = data[0].saque.valorDiario + value;
    }

    data[0].saque.ultimoSaque = date;
    data[0].saldo = data[0].saldo - value;


    saveHistory(data[0]);

    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data[0]),
    };

    fetch("http://localhost:5000/account/1", options)
      .then((response) => response.json())
      .catch((err) => console.error(err));

      history(-1);
  }

  return (
    <div className="Transactions">
      <TitleTransactions title={"Página de Movimentação"} type={"Saques"} />
      <div className="blocoFormInput">
        <input
          className="TransactionInput"
          type="number"
          placeholder="Informe o valor"
          onChange={(e) => setValue(parseFloat(e.target.value))}
        />

        <div className="BoxButton">
          <button className="CancelButton" onClick={() => history(-1)}>
            Voltar
          </button>
          <button onClick={() => saveSaque()}>Confirmar</button>
        </div>
      </div>
    </div>
  );
};

export default Saque;
