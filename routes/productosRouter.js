const express   = require('express')
const productosRouter = express.Router()

const productos = []

productosRouter.use(express.urlencoded({ extended: true }))
productosRouter.use(express.json())

productosRouter.get('/', (req, res) => {
    res.json(productos)
})

productosRouter.get('/:id', (req, res) => {

    if(isNaN(req.params.id)){
        res.json({error : 'producto no encontrado' })
    }
    else if( req.params.id > productos.length) {
        res.json({error : 'producto no existe' })
    }
    else{
        res.json(productos[req.params.id - 1])
    }
    
})

productosRouter.post('/', (req, res) => {
    productos.push(req.body)
    aux = productos.length
    productos[aux-1].id = aux
    res.json({message: 'se agrego el nuevo producto'})
})

productosRouter.put('/:id', (req, res) => {
    productos.splice(req.params.id -1, 1,req.body)
    res.json({
        message: 'se moficico el productos'
    })
})
productosRouter.delete('/:id', (req, res) => {
    // productos.splice(req.params.id, 1,'')
    // res.send( 'se borro el productos ')
    productos.splice(req.params.id -1, 1)
    res.send( 'se borro el productos ')
})

module.exports = productosRouter