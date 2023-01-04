const { serverHttp, io } = require("./http");
const socket = require("./socket")

serverHttp.listen(4000, ()=> console.log("Servidor rodando na porta 4000"))