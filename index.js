const express = require('express');
const app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {

    socket.on('disconnect', () => {
        console.log('caiu ai manoooo')
    })

    socket.on('entrada', data => {
        console.log(data);
        socket.emit('resultado', data.msg + ' Sávio Server');
    })
})

app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.render('index')
})

http.listen(3000, () =>{
    console.log('Running...')
})