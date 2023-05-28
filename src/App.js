import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";

function App() {
  return (
    <div className="w-screen min-h-screen h-auto flex flex-col justify-center items-center">
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
