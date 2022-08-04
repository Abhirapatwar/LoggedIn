import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Login from "./Components/Login";
import Signout from "./Components/Signout";
import "./Components/Main.css"

function App() {
  let logvar=window.localStorage.getItem("log")

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={logvar?<Signout />:<Login />}/>
          <Route path="/logged" element={<Signout />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
