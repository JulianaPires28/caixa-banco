import "./App.css";
import "./styles/global.css"
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
