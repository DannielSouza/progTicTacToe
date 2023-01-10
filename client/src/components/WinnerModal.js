import React from "react";
import style from "./styles/WinnerModal.module.css";

const WinnerModal = ({ winnerName, winnerMark, socket }) => {

  function backHome(){
    window.location.href= "/"
  }

  socket.on("backHome", (winner) => {
    window.location.href= "/"
  });

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
