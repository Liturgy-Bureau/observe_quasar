const express = require('express')
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ path: "/memb"});
const port = 3001;

io.on("connection", (socket) => {
    console.log("someone connected on USER SERVER!")
  });

  httpServer.listen(port);
