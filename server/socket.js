const { io } = require('./http')

const users = []

io.on("connection", (socket) => {

  socket.on("roomEnter", (data) => {

    socket.join(data.room)

    const userInRoom = users.find(user=> user.username === data.username && user.room === data.room)

    if(userInRoom){
      userInRoom.socketId = socket.id
    }
    else{
      users.push({
        socketId: socket.id,
        username: data.username,
        room: data.room
      })
    }
  });

  
});


io.on("start_game", async (socket)=>{
  const connectedSockets = io.sockets.adapter.rooms.get(users.room)
  const socketRooms = Array.from(socket.room.values()).filter(room => room !== socket.id)

  if(socketRooms.length > 0 || connectedSockets && connectedSockets.size === 2){
    socket.emit("romm_join_error",{error: "The room is full"})
  }else{
    await socket.join(socket.room)
    socket.emit("room_joined")
  }


})