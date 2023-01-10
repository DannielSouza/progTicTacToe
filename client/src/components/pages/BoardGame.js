import React from "react";
import HeaderGame from "../HeaderGame";
import style from "../styles/BoardGame.module.css";
import WinnerModal from "../WinnerModal";

const BoardGame = ({ io, socket }) => {
  const [player, setPlayer] = React.useState(
    JSON.parse(localStorage.getItem("player"))
  );
  const [headerGame, setHeaderGame] = React.useState(null);
  const [board, setBoard] = React.useState(null);
  const [playTurn, setPlayTurn] = React.useState(null)
  const [winner, setWinner] = React.useState(null)


  socket.on("makeGame", (data) => {
    setHeaderGame(data.matchUsers);
    setBoard(data.board);

    data.matchUsers.forEach(playerWithMark=>{
      if(playerWithMark.socketId === player.socketId) setPlayer(playerWithMark)
    })

  });


  function makeAPlay({ target }) {
    socket.off("makeAPlay");
    socket.emit("makeAPlay", { ...player, playedId: target.id, thisBoard: board, playTurn});
    socket.off("makeAPlay");
  }


  socket.on("newBoard", (newBoard) => {
    setBoard(newBoard);
  });


  socket.on("winner", (winner) => {
    setWinner(winner);
  });

  if (board)
    return (
      <section>
        {headerGame && <HeaderGame setPlayTurn={setPlayTurn} socket={socket} headerGame={headerGame} />}
        {winner && <WinnerModal player={player} socket={socket} winnerName={winner.username} winnerMark={winner.mark}/> }


        <div className={style.gameContainer}>
          <div className={style.game}>
            {board.map((boardItem, index) => {
              return(
              <div
                key={index}
                className={"casa" + index + " casa"}
                onClick={makeAPlay}
                id={index}
              >
                {boardItem === "X" &&<span className={style.markX}>X</span>}
                {boardItem === "O" &&<span className={style.markO}>O</span>}
              </div>)
            })}
          </div>
        </div>
      </section>
    );
};

export default BoardGame;
