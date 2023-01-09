import React from "react";
import style from "./styles/HeaderGame.module.css";

const HeaderGame = ({ headerGame, socket, setPlayTurn }) => {
  const [player1, setPlayer1] = React.useState();
  const [player2, setPlayer2] = React.useState();
  const [currentPlay, setCurrentPlay] = React.useState("X");

  console.log({headerGame})


  React.useEffect(()=>{
    setPlayTurn("X")
  },[])


  React.useEffect(() => {
    if (headerGame[0].mark === "X") {
      setPlayer1(headerGame[0]);
      setPlayer2(headerGame[1]);
    } else {
      setPlayer1(headerGame[1]);
      setPlayer2(headerGame[0]);
    }
  }, []);


  socket.on("recivePlay", (data)=>{
    console.log(data)


    setCurrentPlay(data)
    setPlayTurn(data)
  })


  if (player1 && player2)
    return (
      <header className={style.container}>
        <div className={style.itemLeft}>
          <p>{player1.username}</p>
          <span>{player1.mark}</span>
        </div>

        <div className={style.currentPlayer}>
          <p>{currentPlay}</p>
          <span>Jogador atual</span>
        </div>

        <div className={style.itemRight}>
          <p>{player2.username}</p>
          <span>{player2.mark}</span>
        </div>
      </header>
    );
};

export default HeaderGame;
