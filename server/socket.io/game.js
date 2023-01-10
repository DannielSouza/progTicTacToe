const { io } = require("../http");

let playTurn
const possibleWins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];



io.on("connect", (socket) => {
  socket.on("makeAPlay", (data) => {
    let board = [...data.thisBoard];

    if (board[data.playedId] === 0) {
      if (data.mark === data.playTurn) {
        board[data.playedId] = data.mark;
        let futurePlay;

        board[data.playedId] = data.mark;
        data.playTurn === "X" ? (futurePlay = "O") : (futurePlay = "X");


        io.to(data.room).emit("newBoard", board);
        io.to(data.room).emit("recivePlay", futurePlay);

        /* CHECK IF THERE'S A WINNER */

        possibleWins.forEach(possibility=>{
          if(board[possibility[0]] === data.mark && board[possibility[1]] === data.mark && board[possibility[2]] === data.mark){
            io.to(data.room).emit("winner", {username: data.username, mark: data.mark});
            
            setTimeout(() => {
              io.to(data.room).emit("backHome")
            }, 5000);
          }
        })
      }
    }
  });
});
