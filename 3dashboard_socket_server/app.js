const express = require('express')
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ path: "/dash"});
const port = 3002;

io.on("connection", (socket) => {
    console.log("someone connected on DASHBOARD SERVER!")
  });

  httpServer.listen(port);
