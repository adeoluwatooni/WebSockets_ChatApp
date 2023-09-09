const express = require('express')
const socket = require('socket.io')
const dotenv = require('dotenv')

// initializing express
const app = express()

// configure environment file
dotenv.config()

// create a server
const server = app.listen(process.env.PORT, () => {
  console.log('listening to server on port', process.env.PORT);
})

// Loading static frontend files
app.use(express.static('client'))

const io = socket(server)

io.on('connection', (socket) => {
  console.log('made socket connection');
})