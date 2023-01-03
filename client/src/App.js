import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import BoardGame from "./BoardGame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/game" element={<BoardGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
