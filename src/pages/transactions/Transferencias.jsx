import { useState } from "react";
import TitleTransactions from "../../components/TitleTransactions";
import "../../styles/transaction.css";
import "../../styles/commomComponents.css";
import useGetCustomHook from "./../../hooks/useGetCustomHook";
import { useNavigate } from "react-router-dom";

const Transaction = () => {
  const [value, setValue] = useState(0);
  const { data } = useGetCustomHook();
  const history = useNavigate();
  const date = new Date().toLocaleDateString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });

  function saveHistoryTransaction(account) {
    const extractBody = {
      tipo: "Saída",
      data: date,
      operacao: "Transferência",
      valor: value,
      saldo: data[0].saldo,
    };
    account.extrato.push(extractBody);
  }

  function saveTransaction() {
    if (
      (date === data[0].transferencia.ultimaTransferencia &&
        data[0].transferencia.valorDiario + value > 8000) ||
      data[0].transferencia.valorDiario >= 8000
    ) {
      alert("Limite diário para transferência atingido");
      return;
    }

    if (data[0].saldo < value) {
      alert("Você não pode enviar mais dinheiro do que possui.");
      return;
    }

    if (value > 8000) {
      alert("Valor ultrapassa o limite permitido!");
      return;
    } else if (value <= 0) {
      alert("O valor para transferência precisa ser maior 0");
      return;
    }

    if (
      date !== data[0].transferencia.ultimaTransferencia &&
      data[0].transferencia.valorDiario > 0
    ) {
      data[0].transferencia.valorDiario = value;
    } else {
      data[0].transferencia.valorDiario =
        data[0].transferencia.valorDiario + value;
    }

    data[0].transferencia.ultimaTransferencia = date;
    data[0].saldo = data[0].saldo - value;

    saveHistoryTransaction(data[0]);

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
      <TitleTransactions
        title={"Página de Movimentação"}
        type={"Transferência"}
      />
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
          <button onClick={() => saveTransaction()}>Confirmar</button>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
