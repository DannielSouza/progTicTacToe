const { io } = require("../http");

const players = []
 
io.on("connect",(socket)=>{

  socket.on("pairPlayersInGame", (data)=>{
    players.push(data)
    io.to(data.room).emit("makeHeaderGame", [players[0],players[players.length -1]])
  })
  
  
  
  
})