import React from "react";
import style from "./styles/HeaderGame.module.css";

const HeaderGame = ({ headerGame }) => {

  console.log(headerGame)


  return (
    <header className={style.container}>
        <div className={style.itemLeft}>
          <p>{headerGame[0].username}</p>
          <span>{headerGame[0].mark}</span>
        </div>
        <div className={style.itemRight}>
          <p>{headerGame[1].username}</p>
          <span>{headerGame[1].mark}</span>
        </div>
    </header>
  );
};

export default HeaderGame;
