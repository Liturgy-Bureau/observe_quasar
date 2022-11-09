const express = require('express')
const { createServer } = require("https");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ path: "/obj"});
const port = 3006;

io.on("connection", (socket) => {
    console.log("someone connected on OBJECT SERVER!")
  });

  httpServer.listen(port);
