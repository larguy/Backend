const fs = require('fs');
const express = require('express')
const productosRouter = require('./routes/productosRouter')

const app = express()
const PORT = 8080

app.use(express.static('public'))

app.use('/api/productos', productosRouter)


const server = app.listen(PORT, () => {
    console.log(`servidor iniciado en el puerto ${server.address().port}`)
})

server.on('error', (error) => { console.log(`Hubo un error: ${error}`) })

// class Contenedor{
//     constructor(nombre){
//         this.nombre = nombre
//     }

//     async recargar(obj){
//         try{
//             const contenido = fs.readFileSync(this.nombre)
//             const contenido_parsed = JSON.parse(contenido)
//             fs.writeFileSync('./productos.txt',JSON.stringify([...contenido_parsed,obj],null,2))
//         }
//         catch(error){
//             fs.writeFileSync('./productos.txt',JSON.stringify([{...obj,}],null,2))
//         }
//     }

//     async save(obj){
//         try{
//             const contenido = fs.readFileSync(this.nombre)
//             const contenido_parsed = JSON.parse(contenido)
//             obj["id"] = (contenido_parsed[contenido_parsed.length -1].id) + 1
//             fs.writeFileSync("./productos.txt",JSON.stringify([...contenido_parsed,obj],null,2))
//         }
//         catch(error){
//             fs.writeFileSync("./productos.txt",JSON.stringify([{...obj,id: 0}],null,2))
//         }
//     }

//     getById(id){
//         try {
//             const productos = fs.readFileSync(this.nombre, "utf-8")
//             let productosParsed = JSON.parse(productos)
//             return JSON.stringify(productosParsed.find(producto => id === producto.id),null,2)
//         }
//         catch (error) {
//             console.log(error)
//         }
//     }

//     getAll(){
//         try {
//             const contenido = fs.readFileSync(this.nombre, "utf-8")
//             let datosParsed = JSON.parse(contenido)
//             return JSON.stringify(datosParsed,null,2)
//         }
//         catch (error) {
//             console.log("Error: ", toString(error))
//         }
//     }

//     deleteById(id){
//         try {
//             const productos = fs.readFileSync(this.nombre, "utf-8")
//             let productosarray = JSON.parse(productos)
//             productosarray.forEach(element => {
//                 if(element.id === id){
//                     productosarray.splice(productosarray.indexOf(element),1)
//                     contenedor.deleteAll()
//                     contenedor.recargar(productosarray)
//                     return console.log("Se borro Producto")
//                 }
//             });
            
//         } catch (error) {
//             console.log("No se encontro el Producto", error)
//         }
//     }

//     deleteAll(){
//         fs.writeFileSync("./productos.txt","")
//     }
    
//     long(){
//         try {
//             const productos = fs.readFileSync("./productos.txt", "utf-8")
//             let productosarray = JSON.parse(productos)
//             return productosarray.length
//         }
//         catch (error) {
//             console.log("Error: ", toString(error))
//         }
//     }
// }



// const contenedor = new Contenedor("./productos.txt")

// contenedor.save({
//     title: 'martillo',
//     price: 1170,
//     thumbnail: 'https://assets.tramontina.com.br/upload/tramon/imagens/GAR/40200029PNM001G.png \n'
// })
// contenedor.save({
//     title: 'destornillador Torx',
//     price: 580,
//     thumbnail: 'https://arcencohogar.vtexassets.com/arquivos/ids/300270-500-auto?v=637665764765470000&width=500&height=auto&aspect=true'
// })
// contenedor.save({
//     title: 'pico de loro',
//     price: 1275,
//     thumbnail: 'https://arcencohogar.vtexassets.com/arquivos/ids/299158-500-auto?v=637665763525330000&width=500&height=auto&aspect=true'
// })

// console.log(contenedor.getById(1))
// console.log(contenedor.getAll())
// //contenedor.deleteById(1)
// //contenedor.deleteAll()




// app.get("/prueba", (req, res) => {
//     res.send(
//         `hola mundo`
//         )
//     })

// app.get("/productos", (req, res) => {
//         res.send(
//             `todos los productos: </br> ${contenedor.getAll()}`
//             )
//     });

// app.get("/productoRandom", (req, res) => {
//     let aux = parseInt(Math.random() * contenedor.long() - 1) +1
//     res.send(
//     ` <h1> Este es el producto: ${contenedor.getById(aux)}</h1>`)
// })


