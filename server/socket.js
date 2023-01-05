const { io } = require("./http");

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

  socket.on("waitForPlayers", (data) => {
    console.log("Esperando jogadores");
    
    socket.join(data.room);

    const room = io.sockets.adapter.rooms.get("node")

    if(room.size === 2){
      console.log("Iniciar Jogo agora.")
    }
  });
});
