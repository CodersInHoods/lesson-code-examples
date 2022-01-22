const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.send("hello");
});

io.on("connection", (socket) => {
  console.log("connction established", socket.id);
  io.sockets.emit("greet", `Hello, thanks for joining ${socket.id}`);

  socket.on("message", ({ message, userName }) => {
    io.sockets.emit("message", { message, userName: userName });
  });
});

server.listen(3333, () => {
  console.log("listening on *:3333");
});
