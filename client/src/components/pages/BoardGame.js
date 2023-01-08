import React from "react";
import HeaderGame from "../HeaderGame";
import style from "../styles/BoardGame.module.css";

const BoardGame = ({ io, socket }) => {
  const [player, setPlayer] = React.useState(
    JSON.parse(localStorage.getItem("player"))
  );
  const [headerGame, setHeaderGame] = React.useState(null);
  const [board, setBoard] = React.useState(null);

  React.useEffect(() => {
    socket.off("pairPlayersInGame");
    socket.emit("pairPlayersInGame", player);
    socket.off("pairPlayersInGame");
  }, []);

  socket.on("makeGame", (data) => {
    setHeaderGame(data.matchUsers);
    setBoard(data.board);
  });

  function makeAPlay({ target }) {
    socket.off("makeAPlay");
    socket.emit("makeAPlay", { ...player, playedId: target.id });
    socket.off("makeAPlay");
  }

  /* socket.off("newBoard") */
  socket.on("newBoard", (newBoard) => {
    console.log("chegou");
    setBoard(newBoard);
  });
  /* socket.off("newBoard") */

  if (board)
    return (
      <section>
        {headerGame && <HeaderGame headerGame={headerGame} />}

        <div className={style.gameContainer}>
          <div className={style.game}>
            {board.map((boardItem, index) => {
              return(
              <div
                className={"casa" + index + " casa"}
                onClick={makeAPlay}
                id={index}
              >
                {boardItem === "X" &&<span className={style.mark}>X</span>}
                {boardItem === "O" &&<span className={style.mark}>O</span>}
              </div>)
            })}
          </div>
        </div>
      </section>
    );
};

export default BoardGame;
