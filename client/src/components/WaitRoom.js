import React from "react";
import style from "./styles/WaitRoom.module.css";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const WaitRoom = ({ player, io, socket }) => {
  const navigate = useNavigate();

  socket.on("sendMark", (user) => {
    localStorage.setItem("player", JSON.stringify(user));
  });

  socket.off("startGame")
  socket.on("startGame", () => {
    setTimeout(() => {
      navigate("/game");
    }, 1000);
    socket.off("startGame")
  });



  if (player)
    return (
      <section className={style.container}>
        <p className={style.textRoom}>Sala: {player.room}</p>

        <div className={style.infoContainer}>
          <p>
            Olá {player.username}! Chame algum amigo para jogar contra você.{" "}
          </p>
          <Loader />
        </div>
      </section>
    );
};

export default WaitRoom;
