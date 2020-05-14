const express = require("express");
const app = express()
const Http = require("http").Server(app);
const sock = require("socket.io")(Http);

const position = {
    x: 0,
    y: 0
};

let users = []
let rooms = ['lobby'].concat(Object.keys(sock.adapter.rooms)[1])

sock.on("connection", socket => {
    console.log('user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected')
    })

    socket.on('newPlayer', player => {
        socket.username = player;
        users.push(socket.username)
        socket.emit('currentPlayers', users)
    })

    socket.on('getPlayers', players => {
        socket.emit('currentPlayers', players)
    })

    socket.on('createRoom', room => {
        if (socket.room) 
            socket.leave(socket.room);

        socket.room = room;
        rooms.push(socket.room);
        socket.join(room);
        socket.emit('availableRooms', rooms)
    })

    socket.on('joiningRoom', room => {
        socket.join(room);
        socket.broadcast.to(room).emit('notice', `User ${socket.username} has joined the ${room}`)
    })

});

Http.listen(3000, () => {
    console.log("Listening at :3000...");
});