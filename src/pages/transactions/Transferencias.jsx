import TitleTransactions from "../../components/TitleTransactions";
import "../../styles/transaction.css";
import "../../styles/global.css"
import "../../styles/inputTransactions.css"


const Deposito = () => {
  return (
    <div className="Transactions">
      <TitleTransactions
        title={"Página de Movimentação"}
        type={"Transferências"}
      />
      <div className="blocoFormInput">
        <div className="inputTransactions">
          <input type="text" placeholder="Informe o valor" />
        </div>
        <button >Confirmar</button>
      </div>
    </div>
  );
};

export default Deposito;
