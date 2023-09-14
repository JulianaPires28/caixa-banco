import { useState } from "react";
import TitleTransactions from "../../components/TitleTransactions";
import "../../styles/transaction.css";
import "../../styles/commomComponents.css";
import useGetCustomHook from './../../hooks/useGetCustomHook';

const Deposito = () => {
  const [value, setValue] = useState(0);
  const { data } = useGetCustomHook();
  /**TODO
   * criar um hook custom para fazer get de informações
   * fazer alteração dos dados
   * fazer put com novos dados
   * 
   * validações:
   * verificar se valor é nulo
   * verfificar se valor é negativo
   * verificar se tem apenas números
   * 
   * 
   * EXTRA: caso seja uma quantia muito grande, verificar se tem certeza
   * EXTRA: após concluído exibir resumo da tranferencia
   */

  function saveDeposit(){
    
    data[0].saldo += parseFloat(value) 

    const options = {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    };
    
    fetch('http://localhost:5000/account/1', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  return (
    <div className="Transactions">
      <TitleTransactions title={"Página de Movimentação"} type={"Depósito"} />
      <div className="blocoFormInput">
        <input
          className="TransactionInput"
          type="number"
          placeholder="Informe o valor"
          onChange={(e) => setValue(e.target.value)}
        />

        <div className="BoxButton">
          <button className="CancelButton" onClick={() => console.log()}>Voltar</button>
          <button onClick={()=>saveDeposit()}>Confirmar</button>
        </div>
      </div>
    </div>
  );
};

export default Deposito;
