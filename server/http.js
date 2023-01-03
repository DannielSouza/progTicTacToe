const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors')
const serverHttp = http.createServer(app);
const {Server} = require('socket.io')

const io = new Server(serverHttp)

app.use(cors)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


module.exports = {serverHttp, io}