import { useState } from "react";
import TitleTransactions from "../../components/TitleTransactions";
import "../../styles/transaction.css";
import "../../styles/commomComponents.css";
import useGetCustomHook from "./../../hooks/useGetCustomHook";
import { useNavigate } from "react-router-dom";

const Deposito = () => {
  const [value, setValue] = useState(0);
  const { data } = useGetCustomHook();
  const history = useNavigate();

  const date = new Date().toLocaleDateString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });

  function saveHistoryDeposit(account) {
    const extractBody = {
      tipo: "Entrada",
      data: date,
      operacao: "Depósito",
      valor: value,
      saldo: data[0].saldo,
    };

    account.extrato.push(extractBody);
    return account;
  }

  function saveDeposit() {
    if (value === 0) {
      alert("O valor para depósito precisa ser diferente de 0");
    }

    data[0].saldo += value;

    saveHistoryDeposit(data[0]);

    const options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data[0]),
    };

    fetch("http://localhost:5000/account/1", options)
      .then((response) => response.json())
      .catch((err) => console.error(err));


  }

  return (
    <div className="Transactions">
      <TitleTransactions title={"Página de Movimentação"} type={"Depósito"} />
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
          <button onClick={() => saveDeposit()}>Confirmar</button>
          {/* <Modal warning={`Valor do depósito de ${value}`} /> */}
        </div>
      </div>
    </div>
  );
};

export default Deposito;
