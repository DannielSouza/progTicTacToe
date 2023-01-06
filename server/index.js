const { serverHttp, io } = require("./http");
const pairPlayers = require("./socket.io/pairPlayers")
const game = require("./socket.io/game")

serverHttp.listen(4000, ()=> console.log("Servidor rodando na porta 4000"))