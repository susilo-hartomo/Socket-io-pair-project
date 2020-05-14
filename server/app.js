const express = require("express");
const app = express()
const Http = require("http").Server(app);
const Socketio = require("socket.io")(Http);

const position = {
    x: 0,
    y: 0
};

Socketio.on("connection", socket => {
    console.log('user connection');

    // socket.emit("position", position);

    // socket.on('join room', room => {
    //     socket.join(room)
    // })

    // socket.on('move', data => {
    //     const {room, move} = data;
    //     socket.to(room).emit('move', {
    //         move,
    //         'name': 'same_one'
    //     })
    // })

    // socket.on("move", ({ room, data }) => {
    //     socket.on(room).emit('data', (data, name) => {
    //         switch (data) {
    //             case "left":
    //                 position.x -= 5;
    //                 Socketio.emit("position", position);
    //                 break;
    //             case "right":
    //                 position.x += 5;
    //                 Socketio.emit("position", position);
    //                 break;
    //             case "up":
    //                 position.y -= 5;
    //                 Socketio.emit("position", position);
    //                 break;
    //             case "down":
    //                 position.y += 5;
    //                 Socketio.emit("position", position);
    //                 break;
    //         }
    //     })
    // });
});

Http.listen(3000, () => {
    console.log("Listening at :3000...");
});