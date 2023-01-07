const { io } = require("../http");

const players = []
const playTurn = "X"
const board = [0,0,0,0,0,0,0,0,0]
 
io.on("connect",(socket)=>{

  socket.on("pairPlayersInGame", (data)=>{
    players.push(data)

    const matchUsers = []
    matchUsers.push(players[0])

    players.map((player)=>{
      if(matchUsers.length < 2){
        if(matchUsers[0].username !== player.username) matchUsers.push(player)
      }
    })
    io.to(data.room).emit("makeGame", {matchUsers, board})
  })


  socket.on("makeAPlay", data=>{

    if(data.mark === playTurn){

    }

  })
  
  
  
  
})