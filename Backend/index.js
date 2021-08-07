const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);
const cors = require("cors")
app.use(cors())
const users = {};
const socketToRoom = {};
const connect = require("./src/config/db");
const UserController = require("./src/controllers/user.controller")
const GroupController = require("./src/controllers/group.controller")

app.use("/user", UserController)
app.use("/groups", GroupController)

io.on('connection', socket => {
  socket.on("join room", roomID => { 
    if (users[roomID]) {
      const length = users[roomID].length;
      if (length === 4) { 
        socket.emit("room full");
        return;
      }
      users[roomID].push(socket.id);
    } else {
      users[roomID] = [socket.id];
    }
    socketToRoom[socket.id] = roomID;
    const usersInThisRoom = users[roomID].filter(id => id !== socket.id);

    socket.emit("all users", usersInThisRoom);

  });

  socket.on("sending signal", payload => {
    io.to(payload.userToSignal).emit('user joined', { signal: payload.signal, callerID: payload.callerID });
  });

  socket.on("returning signal", payload => {
    io.to(payload.callerID).emit('receiving returned signal', { signal: payload.signal, id: socket.id });
  });

  socket.on('disconnect', () => {
    const roomID = socketToRoom[socket.id];
    let room = users[roomID];
    if (room) {
      room = room.filter(id => id !== socket.id);
      users[roomID] = room;
    }
  });

});


server.listen(8000, async () => {
  await connect()
  console.log(`server is listening on port 8000`);
});