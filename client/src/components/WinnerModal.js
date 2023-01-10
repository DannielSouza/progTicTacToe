import React from "react";
import style from "./styles/WinnerModal.module.css";
import { useNavigate } from "react-router-dom";

const WinnerModal = ({ winnerName, winnerMark }) => {
  const navigate = useNavigate();


  function backHome(){
    navigate("/")
  }

  return (
    <section className={style.container}>
      {winnerMark === "X" ? (
        <div className={style.itemContainerX}>
          <h1>Vitória!</h1>
          <p>O jogador <span>{winnerName}</span> venceu!</p>
          <button onClick={backHome}>Inicio</button>
        </div>
      ) : (
        <div className={style.itemContainerO}>
          <h1>Vitória!</h1>
          <p>O jogador <span>{winnerName}</span> venceu!</p>
          <button onClick={backHome}>Inicio</button>
        </div>
      )}

      
    </section>
  );
};

export default WinnerModal;
