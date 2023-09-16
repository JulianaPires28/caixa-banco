import { Route, Routes } from "react-router-dom";

import Deposito from "../pages/transactions/Deposito";
import Home from "../pages/Home";
import Saques from "../pages/transactions/Saques";
import Transferencias from "../pages/transactions/Transferencias";
import Extrato from "../pages/Extrato";


const Routes_App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/deposito" element={<Deposito />} />
      <Route path="/saque" element={<Saques />} />
      <Route path="/transferencia" element={<Transferencias/>} />
      <Route path="/extrato" element={<Extrato/>} />

    </Routes>
  );
};

export default Routes_App;
