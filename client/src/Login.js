import React from "react";

const { io } = require("socket.io-client");
const socket = io("http://localhost:3000");

const Login = () => {

  const [loginSettings, setLoginSettings] = React.useState({})

  function changeSettings({target}){
    setLoginSettings(prev=>{
      return {...prev, [target.id]: target.value}
    })
  }

  function teste(){
    socket.on("connect", () => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });
  }

  return (
    <div className="App">
      <form onSubmit={teste}>
        <label>
          Usuário:
          <input onChange={changeSettings} id='user' type="text" />
        </label>

        <label>
          Sala:
          <input onChange={changeSettings} id='room' type="text" />
        </label>

        <button>Entrar</button>
      </form>
    </div>
  );
};

export default Login;
