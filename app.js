
const express = require('express');
const socket = require('socket.io');
const dotenv = require('dotenv');

// initializing express
const app = express();

// configure environment file
dotenv.config();

// Loading static frontend files
app.use(express.static('client'));

// create a server
const server = app.listen(process.env.PORT, () => {
  console.log('listening to server on port', process.env.PORT);
});

// Create the io object before defining the connection event
const io = socket(server);

io.on('connection', (socket) => {
  console.log('made socket connection', socket.id);

  socket.on('chat', (data) => {
    console.log(data.sender, data.message);
    io.sockets.emit('chat', data)
    // socket.emit('chat', data)
  })

});
