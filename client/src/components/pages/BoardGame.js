import React from 'react'
const { io } = require("socket.io-client");
const socket = io("http://localhost:4000");

const BoardGame = () => {


  socket.on("sendMark", (user)=>{
    console.log(user);
  })


  return (
    <div>BoardGame</div>
  )
}

export default BoardGame