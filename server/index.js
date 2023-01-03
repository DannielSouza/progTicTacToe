const { serverHttp } = require("./http");
const socket = require("./socket")

serverHttp.listen(3000, ()=> console.log("Servidor rodando na porta 4000"))