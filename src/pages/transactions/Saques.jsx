import { useState } from "react";
import TitleTransactions from "../../components/TitleTransactions";
import "../../styles/transaction.css";
import "../../styles/commomComponents.css";
import useGetCustomHook from './../../hooks/useGetCustomHook';
import { useNavigate } from "react-router-dom";

const Saque = () => {
  const [value, setValue] = useState(0);
  const { data } = useGetCustomHook();
  const history = useNavigate();

  function saveSaque(){ 
    const date = new Date().toLocaleDateString("pt-BR", {timeZone: "America/Sao_Paulo",
  });   

    if(
      date === data[0].saque.ultimoSaque &&
      data[0].saque.valorDiario >= 5000 &&
      data[0].saque.valorDiario  + parseFloat(value) > 5000
    ){
      alert("Limite diário para saque atingido")
      return;
    }
    data[0].saque.ultimoSaque = date
    data[0].saldo = data[0].saldo - parseFloat(value)
    data[0].saque.valorDiario = data[0].saque.valorDiario + parseFloat(value)
    console.log('data',data)

    const options = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data[0])
    };

    console.log('options',options.body);
    
    fetch('http://localhost:5000/account/1', options)
      .then(response => response.json())
      .catch(err => console.error(err));
  }

  return (
    <div className="Transactions">
      <TitleTransactions title={"Página de Movimentação"} type={"Saques"} />
      <div className="blocoFormInput">
        <input
          className="TransactionInput"
          type="number"
          placeholder="Informe o valor"
          onChange={(e) => setValue(e.target.value)}
        />

        <div className="BoxButton">
          <button className="CancelButton" onClick={() => history(-1)}>Voltar</button>
          <button onClick={()=>saveSaque()}>Confirmar</button>
        </div>
      </div>
    </div>
  );
};

export default Saque;
