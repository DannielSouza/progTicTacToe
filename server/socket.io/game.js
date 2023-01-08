const { io } = require("../http");

const players = []
let playTurn = "X"
let board
 
io.on("connect",(socket)=>{

  socket.on("pairPlayersInGame", (data)=>{
    players.push(data)

    let matchUsers = []
    matchUsers.push(players[0])

    players.map((player)=>{
      if(matchUsers.length < 2){
        if(matchUsers[0].username !== player.username) matchUsers.push(player)
      }
    })
    io.to(data.room).emit("makeGame", {matchUsers, board})
    board = [0,0,0,0,0,0,0,0,0]
  })


  socket.on("makeAPlay", data=>{
    console.log(data)
    if(data.mark === playTurn){
      if(board[data.playedId] === 0)board[data.playedId] = data.mark
      playTurn === "X" ? playTurn = "O" : playTurn = "X"
      io.to(data.room).emit("newBoard", board)
    }

  })
  
  
  
  
})