const fs = require('fs');
const express = require('express')
const handlebars = require('express-handlebars')

const productosRouter = require('./routes/productosRouter')

const app = express()
const PORT = 8080

app.set('view engine', 'hbs')
app.set('views', './views')
app.use(express.static('public'))

app.use('/productos', productosRouter)

app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
    })
)

const server = app.listen(PORT, () => {
    console.log(`servidor iniciado en el puerto ${server.address().port}`)
})
server.on('error', (error) => { console.log(`Hubo un error: ${error}`) })

module.exports = app