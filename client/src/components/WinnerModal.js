import React from "react";
import style from "./styles/WinnerModal.module.css";

const WinnerModal = ({ winnerName, winnerMark, socket, player }) => {

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
          {winnerMark === player.mark ? <h1>Vitória!</h1> : <h1>Derrota!</h1>}
          <p>O jogador <span>{winnerName}</span> venceu!</p>
          <button onClick={backHome}>Inicio</button>
        </div>
      ) : (
        <div className={style.itemContainerO}>
          {winnerMark === player.mark ? <h1>Vitória!</h1> : <h1>Derrota!</h1>}
          <p>O jogador <span>{winnerName}</span> venceu!</p>
          <button onClick={backHome}>Inicio</button>
        </div>
      )}
    </section>
  );
};

export default WinnerModal;
