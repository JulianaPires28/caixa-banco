import TitleTransactions from "../../components/TitleTransactions";
import "../../styles/transaction.css";

const Deposito = () => {
  return (
    <div className="Transactions">
      <TitleTransactions title={"Página de Movimentação"} type={"Saques"} />
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
