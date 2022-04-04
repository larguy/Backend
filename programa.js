const fs = require('fs');
const express = require('express')
const PORT = 8080
const { Server : IOServer } = require('socket.io')
const {Server: HTTPServer} = require('http')
const handlebars = require('express-handlebars')

const productosRouter = require('./routes/productosRouter');

const app = express()
const httpServer = new HTTPServer(app)
const io = new IOServer(httpServer)


app.set('view engine', 'hbs')
app.set('views', './views')
app.use(express.static('public'))


httpServer.listen(PORT, () => console.log  ('servidor corriendo en el puerto 8080'))

const messages = [
    { author: 'Juan', date: new Date, text: '¡Hola! ¿Que tal?' },
    
]

console.log('probando hora',messages[0].date)

io.on('connection', (socket) => {
    console.log('se conecto un usuario')
    socket.emit('messages', messages)
    socket.on('notificacion', (data) => {
        console.log(data)
    })
        
    socket.on('new-message', (data) => {
        messages.push(data)
        io.sockets.emit('messages', messages)
    })
})


app.use('/', productosRouter)

app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
    })
)


module.exports = app