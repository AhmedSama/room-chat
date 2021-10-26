const express = require('express');
const socket = require('socket.io');


const app = express();
const server = app.listen(3000,()=>{
    console.log('[$]SERVER IS LISTINING AT PORT 3000...')
})
app.use(express.static('./public'));

const io = socket(server);



var socketList = {};

function broadcast(data){
    for (var sock in socketList) {
        socketList[sock].emit("chat", data);
    }
}


io.on('connection',(socket)=>{
    console.log(socket.id,'is connected');
    socketList[socket.id] = socket
    socket.on('chat',(data)=>{
        broadcast(data);
    })
})