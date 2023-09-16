import { useState, useEffect } from "react";
import Card from "./../components/DisplaysMovimentacoesExtrato";
import DisplayPrincipalSaldoConta from "../components/DisplayPrincipalSaldoConta";
import useGetCustomHook from "../hooks/useGetCustomHook";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const { data } = useGetCustomHook();
  const [accountValue, setAccountValue] = useState(0);

  useEffect(() => {
    
    if (data && data[0]) {
      setAccountValue(data[0].saldo);
    } else {
      console.error("Nenhuma conta encontrada");
    }
  }, [data]);

  const currency = accountValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  return (
    <div className="Home">
      <div className="container">
        <DisplayPrincipalSaldoConta title={"Saldo em conta"}>
          <span className="ValueBalance"> { currency ?? "----"}</span>
        </DisplayPrincipalSaldoConta>

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
