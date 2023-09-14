import Card from "./../components/DisplaysMovimentacoesExtrato";
import "../styles/home.css";
import { Link } from "react-router-dom";
import DisplayPrincipalSaldoConta from "../components/DisplayPrincipalSaldoConta";

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <DisplayPrincipalSaldoConta title={"Saldo em conta"} />

        <div className="homeCardOperations">
          <div className="BoxLinkHome">
            <Link to="/deposito" className="link">
              <Card title={"Depósito"}> </Card>
            </Link>

            <Link to="/saque" className="link">
              <Card title={"Saque"}> </Card>
            </Link>
          </div>

          <div className="BoxLinkHome">
            <Link to="/transferencia" className="link">
              <Card title={"Transferência"}> </Card>
            </Link>

            <Link to="/extrato" className="link">
              <Card title={"Extrato"}> </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
