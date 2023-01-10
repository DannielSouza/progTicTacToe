const { io } = require("../http");

const users = [];

io.on("connection", (socket) => {
  socket.on("roomEnter", (data) => {
    socket.join(data.room);

    const userInRoom = users.find(
      (user) => user.username === data.username && user.room === data.room
    );

    if (userInRoom) {
      userInRoom.socketId = socket.id;
    } else {
      const user = {
        socketId: socket.id,
        username: data.username,
        room: data.room,
      };

      users.push(user);
    }
    socket.emit("sendPlayer", {
      socketId: socket.id,
      username: data.username,
      room: data.room,
    });
  });



  const roomUsers = []

  socket.on("waitForPlayers", (data) => {
    socket.join(data.room);
    const room = io.sockets.adapter.rooms.get(data.room)
    let userWithoutMark

    if(room.size === 1){
      userWithoutMark = {
        socketId: data.socketId,
        username: data.username,
        room: data.room,
        mark: "X"
      }
    }else{
      userWithoutMark = {
        socketId: data.socketId,
        username: data.username,
        room: data.room,
        mark: "O"
      }
    }

    socket.emit("sendMark", userWithoutMark)

    if(room.size === 2){
      let board = [0,0,0,0,0,0,0,0,0]
      let playTurn = "X"

      io.to(data.room).emit("startGame")

      const clients = io.sockets.adapter.rooms.get(data.room);
      let roomPlayersId = []
      let roomPlayers = []

      clients.forEach(player=>{
        roomPlayersId.push(io.sockets.sockets.get(player).id)
      })

      users.map(user=>{
        if(user.socketId === roomPlayersId[0] || user.socketId === roomPlayersId[1]){
          roomPlayers.push(user)
        }
      })

      roomPlayers[0].mark = "X"
      roomPlayers[1].mark = "O"

      setTimeout(() => {
        io.to(roomPlayers[0].room).emit("makeGame", {matchUsers: roomPlayers, board: board})
        io.to(roomPlayers[0].room).emit("recivePlay", playTurn)
      }, 1000);

      


    }
  });
});
