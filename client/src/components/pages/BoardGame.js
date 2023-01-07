import React from "react";
import HeaderGame from "../HeaderGame";
import style from "../styles/BoardGame.module.css";

const BoardGame = ({ io, socket }) => {
  const [player, setPlayer] = React.useState(
    JSON.parse(localStorage.getItem("player"))
  );
  const [headerGame, setHeaderGame] = React.useState(null);

  React.useEffect(() => {
    socket.off("pairPlayersInGame");
    socket.emit("pairPlayersInGame", player);
    socket.off("pairPlayersInGame");
  }, []);

  socket.on("makeHeaderGame", (data) => {
    setHeaderGame(data);
  });


  function makeAPlay({target}){
    console.log(target.id)
  }

  return (
    <section>
      {headerGame && <HeaderGame headerGame={headerGame} />}

      <div className={style.gameContainer}>
        <div className={style.game}>

            <div className={style.casa1 + ' ' + style.casa} onClick={makeAPlay} id="casa1"></div>
            <div className={style.casa2 + ' ' + style.casa} onClick={makeAPlay} id="casa2"></div>
            <div className={style.casa3 + ' ' + style.casa} onClick={makeAPlay} id="casa3"></div>

            <div className={style.casa4 + ' ' + style.casa} onClick={makeAPlay} id="casa4"></div>
            <div className={style.casa5 + ' ' + style.casa} onClick={makeAPlay} id="casa5"></div>
            <div className={style.casa6 + ' ' + style.casa} onClick={makeAPlay} id="casa6"></div>

            <div className={style.casa7 + ' ' + style.casa} onClick={makeAPlay} id="casa7"></div>
            <div className={style.casa8 + ' ' + style.casa} onClick={makeAPlay} id="casa8"></div>
            <div className={style.casa9 + ' ' + style.casa} onClick={makeAPlay} id="casa9"></div>
        </div>
      </div>
    </section>
  );
};

export default BoardGame;
