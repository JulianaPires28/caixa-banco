import React, { useState, useEffect } from "react";
import useGetCustomHook from "../hooks/useGetCustomHook";
import "../styles/extrato.css";
import TitleTransactions from "./../components/TitleTransactions";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const { data } = useGetCustomHook();
  const [accountExtract, setAccountExtract] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    if (data && data[0]) {
      setAccountExtract(data[0].extrato);
    } else {
      console.error("Nenhuma conta encontrada");
    }
  }, [data]);

  const accountMovement = accountExtract.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.tipo}</td>
        <td>{item.data}</td>
        <td>{item.operacao}</td>
        <td>
          {item.valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </td>
        <td>
          {item.saldo.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </td>
      </tr>
    );
  });

  return (
    <div className="Extract">
      <div className="ExtractContent">
        <TitleTransactions title={"Extrato"} />
        
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Data</th>
              <th>Operação</th>
              <th>Valor</th>
              <th>Saldo</th>
            </tr>
          </thead>
        </table>

        <div className="tbodyContainer">
          <table>
            <tbody>{accountMovement}</tbody>
          </table>
        </div>
      </div>

      <button className="CancelButton" onClick={() => history(-1)}>Voltar</button>
    </div>
  );
};

export default Table;
