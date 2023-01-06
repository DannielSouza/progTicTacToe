import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import BoardGame from "./components/pages/BoardGame";
const { io } = require("socket.io-client");
const socket = io("http://localhost:4000");

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login io={io} socket={socket} />} />
        <Route path="/game" element={<BoardGame io={io} socket={socket} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
