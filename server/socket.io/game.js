const { io } = require("../http");

const players = []
let playTurn
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

    playTurn = "X"
    board = [0,0,0,0,0,0,0,0,0]

    io.to(data.room).emit("makeGame", {matchUsers, board})
    io.to(data.room).emit("recivePlay", playTurn)
  })


  socket.on("makeAPlay", data=>{

    if(data.mark === playTurn){
      let futurePlay

      if(board[data.playedId] === 0)board[data.playedId] = data.mark
      playTurn === "X" ? playTurn = "O" : playTurn = "X"
      playTurn === "X"?  futurePlay = "X" : futurePlay = "O"
      
      io.to(data.room).emit("newBoard", board)
      io.to(data.room).emit("recivePlay", futurePlay)


    }

  })
  
  
  
  
})