const { io } = require("../http");

const players = []
 
io.on("connect",(socket)=>{

  socket.on("pairPlayersInGame", (data)=>{
    players.push(data)
    io.to(data.room).emit("makeHeaderGame", players)
  })
  
  
  
  
})