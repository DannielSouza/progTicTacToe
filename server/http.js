const express = require('express');
const app = express();
const http = require('http');
// REMOVE THE CORS LATER -> const cors = require('cors')
const serverHttp = http.createServer(app);
const {Server} = require('socket.io')

const io = new Server(serverHttp,{
  cors:{
    origin: "*"
  }
})

module.exports = {serverHttp, io}