const { io } = require("../http");

const players = [];
let playTurn;

io.on("connect", (socket) => {
  socket.on("makeAPlay", (data) => {
    let board = [...data.thisBoard];
    console.log(data);

    if (board[data.playedId] === 0) {
      if (data.mark === data.playTurn) {
        board[data.playedId] = data.mark;
        let futurePlay;

        board[data.playedId] = data.mark;
        data.playTurn === "X" ? (futurePlay = "O") : (futurePlay = "X");

        io.to(data.room).emit("newBoard", board);
        io.to(data.room).emit("recivePlay", futurePlay);
      }
    }
  });
});
