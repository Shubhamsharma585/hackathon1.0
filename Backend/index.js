const express = require('express');
const socket = require('socket.io'); 

const PORT = 5000;
const app = express();
const cors = require("cors")
const { addUser, removeUser, getUser, getUsersInRoom } = require('./src/config/user');
 
app.use(cors())
app.use(express.json());     
  
  
app.use(express.json()); 
app.use(express.urlencoded());
var bodyParser = require('body-parser'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
 
  

const connect = require("./src/config/db"); 
const Document=require("./src/models/document.model")
const UserController = require("./src/controllers/user.controller")
const GroupController = require("./src/controllers/group.controller")

app.use("/user", UserController)   
app.use("/groups", GroupController) 
  
const server = app.listen(PORT, async () => {
  await connect()
  console.log(`server is listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`); 
});


const io = socket(server, {  
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});


const defaultValue=""
io.on('connection', (socket) => {
  socket.emit('connection', null);
  // console.log('new user connected');
  // console.log(socket.id);

  socket.on("get-document", async documentId => {
    const document = await findOrCreateDocument(documentId)
    socket.join(documentId)
    socket.emit("load-document", document.data)

    socket.on("send-changes", delta => {
      socket.broadcast.to(documentId).emit("receive-changes", delta)
    })

    socket.on("save-document", async data => {
      await Document.findByIdAndUpdate(documentId, { data }) 
    })
  })

  //chat content
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if(error) return callback(error);
     //console.log("success")
    socket.join(user.room);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })

  
});


async function findOrCreateDocument(id) {
  if (id == null) return

  const document = await Document.findById(id)
  if (document) return document
  return await Document.create({ _id: id, data: defaultValue })
}


