import React from "react";
import { useNavigate } from "react-router-dom";
import WaitRoom from "../WaitRoom";
import style from '../styles/Login.module.css'




const Login = ({io, socket}) => {

  const [loginSettings, setLoginSettings] = React.useState(null)
  const [player1, setPlayer1] = React.useState(null)
  const navigate = useNavigate()

  function changeSettings({target}){
    setLoginSettings(prev=>{
      return {...prev, [target.id]: target.value}
    })
  }


  socket.on("sendPlayer", (user)=>{
    setPlayer1(user)
    /* console.log(user); */

    socket.emit("waitForPlayers", user)
  })

  


  function roomEnter(event){
    event.preventDefault()
    if(!loginSettings){
      console.log("Informe dos dados")
      return
    }

    socket.emit("roomEnter", loginSettings);
  }


  
  

  return (
    <>
      <WaitRoom player={player1} io={io} socket={socket} />

      <section className={style.container}>

      

      <form className={style.form} onSubmit={roomEnter}>
        <label>
          <span>Usuário</span>
          <input required onChange={changeSettings} name='username' id='username' type="text" />
        </label>

        <label>
          <span>Sala</span>
          <input required onChange={changeSettings} name='room' id='room' type="text" />
        </label>

        <button>Entrar</button>
      </form>

      </section>
    </>
  );
};

export default Login;
