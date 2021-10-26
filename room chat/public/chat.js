var socket = io.connect('192.168.0.114:3000');
var msg = document.getElementById('msg');
var sender = document.getElementById('sender');
var btn = document.getElementById('send');
var chatMSG = document.getElementById('chatMSG');
btn.onclick = function(){
    socket.emit('chat',{
        msgID:sender.value,
        msgBody:msg.value
    })
}

socket.on('chat',(data)=>{
    chatMSG.innerHTML += '<center>'+data.msgID+':'+data.msgBody+'</center><br>';
})







