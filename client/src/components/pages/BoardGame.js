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
    console.log(target.name)
  }

  return (
    <section>
      {headerGame && <HeaderGame headerGame={headerGame} />}

      <div className={style.gameContainer}>
        <div className={style.game}>
          <div className={style.line}>
            <div className={style.casa} onClick={makeAPlay} name={"casa1"} id={style.casa1}></div>
            <div className={style.casa} onClick={makeAPlay} name={"casa2"} id={style.casa2}></div>
            <div className={style.casa} onClick={makeAPlay} name={"casa3"} id={style.casa3}></div>
          </div>
          <div className={style.line}>
            <div className={style.casa} onClick={makeAPlay} name={"casa4"} id={style.casa4}></div>
            <div className={style.casa} onClick={makeAPlay} name={"casa5"} id={style.casa5}></div>
            <div className={style.casa} onClick={makeAPlay} name={"casa6"} id={style.casa6}></div>
          </div>
          <div className={style.line}>
            <div className={style.casa} onClick={makeAPlay} name={"casa7"} id={style.casa7}></div>
            <div className={style.casa} onClick={makeAPlay} name={"casa8"} id={style.casa8}></div>
            <div className={style.casa} onClick={makeAPlay} name={"casa9"} id={style.casa9}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardGame;
