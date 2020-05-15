const express = require('express')();
const Http = require('http').createServer(express);
const Socketio = require('socket.io')(Http);
const port = 3000;
var position = {
  x: 0,
  y: 300,
};

var positionTwo = {
  x: 0,
  y: 200,
}

Socketio.on("connection", socket => {
  socket.emit("positionOne", position);
  socket.emit("positionTwo", positionTwo);
  socket.on('move', data => {
    switch (data) {
      case "randomone":
        let random = Math.floor(Math.random() * 81) + 20
        position.x += random;
       
        Socketio.emit("positionOne", position);
        if (position.x > 901) {
          Socketio.emit('positionOne', position.x = 0, )
          Socketio.emit('positionTwo', positionTwo.x = 0, )
         
          
        }
        break;
        case "randomTwo":
          let sabeb = Math.floor(Math.random() * 81) + 20
          positionTwo.x += sabeb;
          Socketio.emit("positionTwo", positionTwo);
          if (positionTwo.x > 901) {
            Socketio.emit('positionTwo', positionTwo.x = 0, )
            Socketio.emit('positionOne', position.x = 0, )
           
            
          }
          break;

    }
  })
  socket.on('pesan', data=>{
    socket.broadcast.emit('hasilPesan', data)
  })

})

Http.listen(port, () => {
  console.log('Listening=========', port)
})