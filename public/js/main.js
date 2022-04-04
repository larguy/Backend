const socket = io.connect()

socket.on('mi mensaje', (data) => {
    alert(data)
    socket.emit('notificacion', 'mensaje recibido con exito')
})

function render(data) {
    const html = data
    .map((elem, index) => {
        return `<div>
            <strong class="email">${elem.author}</strong>:
            <strong class="date"> [${moment(elem.date).format("DD-MM-YYYY HH:mm:ss")}]</strong>
            <em class="text">${elem.text}</em> </div>`
    })
    .join(' ')
    document.getElementById('mensajes').innerHTML = html
    
}

function renderProduct(data) {
    const html = data
    .map((elem, index) => {
        return `<div>
            <strong class="email">${elem.author}</strong>:
            <strong class="date"> [${moment(elem.date).format("DD-MM-YYYY HH:mm:ss")}]</strong>
            <em class="text">${elem.text}</em> </div>`
    })
    .join(' ')
    document.getElementById('mensajes').innerHTML = html
    
}

socket.on('messages', function (data) {
    render(data)
})

socket.on('product', function (data) {
    renderProduct(data)
})

function addMessage(e) {
    const mensaje = {
    author: document.getElementById('username').value,
    date: new Date,
    text: document.getElementById('texto').value,
    
}
socket.emit('new-message', mensaje)
    return false
}

