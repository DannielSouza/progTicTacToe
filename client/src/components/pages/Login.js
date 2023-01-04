import React from "react";
import { useNavigate } from "react-router-dom";

const { io } = require("socket.io-client");
const socket = io("http://localhost:4000");

const Login = () => {

  const [loginSettings, setLoginSettings] = React.useState(null)
  const navigate = useNavigate()

  function changeSettings({target}){
    setLoginSettings(prev=>{
      return {...prev, [target.id]: target.value}
    })
  }


  


  function roomEnter(event){
    event.preventDefault()
    if(!loginSettings){
      console.log("Informe dos dados")
      return
    }
    socket.emit("roomEnter", loginSettings);

    /* setTimeout(() => {
      navigate('/game')
    }, 500); */  
  }

  
  socket.on("start_game", loginSettings)

  return (
    <div className="App">
      <form onSubmit={roomEnter}>
        <label>
          Usuário:
          <input onChange={changeSettings} name='username' id='username' type="text" />
        </label>

        <label>
          Sala:
          <input onChange={changeSettings} name='room' id='room' type="text" />
        </label>

        <button>Entrar</button>
      </form>
    </div>
  );
};

export default Login;
