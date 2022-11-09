const express = require('express')
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ path: "/chfm"});
const port = 3003;

io.on("connection", (socket) => {
    console.log("someone connected on CHAT&FORUM SERVER!")
  });

  httpServer.listen(port);
