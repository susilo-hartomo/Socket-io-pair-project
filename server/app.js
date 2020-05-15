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

let players = []

Socketio.on("connection", socket => {
  socket.on('playerIn', data=>{
    if(players.length == 2){
      players = [];
    }
    position = {
      x: 0,
      y: 300,
    };

    positionTwo = {
      x: 0,
      y: 200,
    }
    if(players.length === 0){

      console.log('masuk ke app js line 21 emit');
      socket.emit("positionOne", position);
     players.push(data)
     console.log('masuk app js player 1')

    }else{
      socket.emit("positionTwo", positionTwo);
      players.push(data)
      socket.broadcast.emit('positionTwo', positionTwo)
      socket.emit('positionOne', position)
      socket.emit('playerList', players)
      socket.broadcast.emit('playerList', players)
      console.log('masuk app js player 2')
    }
  })
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
  socket.on('reset', data=>{
    position = {
      x: 0,
      y: 300,
    };

    positionTwo = {
      x: 0,
      y: 200,
    }
  Socketio.emit('positionOne', position)
  Socketio.emit('positionTwo', positionTwo)
  Socketio.emit('mulaiDariAwal')
  })

})

Http.listen(port, () => {
  console.log('Listening=========', port)
})
