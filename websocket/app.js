const express = require('express');
const socket = require('socket.io');
const app = express();

app.use(express.static('public'));
app.use('/static', express.static('./static/'));

const server = app.listen(3000, () => {
    console.log('3000 portu çalışıyor');
});

const io = socket(server);

io.on('connection', (socket) => {
    console.log('socket bağlantısı oluştu', socket.id);

    socket.on('chat', function (data) {
        console.log(data);
        io.sockets.emit('chat2',data); // kendisine bağlı olan tüm clientlara gönderiliyor böyle
    });
    socket.on('yaziyor',function(data){
        socket.broadcast.emit('yaziyor',data);
    });
});



