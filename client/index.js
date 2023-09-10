// To make a connection to the socket.io
const socket = io('http://localhost:4000');

// querying the DOM elements
const incomingMessage = document.getElementById('incomingMessage')
const outgoingMessage = document.getElementById('outgoingMessage')
const feedback = document.getElementById('feedback')
const username = document.getElementById('username')
const message = document.getElementById('message')
const sendBtn = document.getElementById('send')


// emitting events
sendBtn.addEventListener('click', (event) => {
  event.preventDefault()

  socket.emit('chat', {
    message: message.value,
    sender: username.value
  })

  message.value=''
})


// Listen to events
socket.on('chat', (data) => {
  if (data.sender === username.value) {
    console.log('1st');
    outgoingMessage.innerHTML += `<p> ${data.message} </p>`
  } else {
    incomingMessage.innerHTML += `<p><strong> ${data.sender}:</strong> ${data.message} </p>`;
  }
})


//incomingMessage.innerHTML += `<p><strong>${data.sender}</strong></p>`