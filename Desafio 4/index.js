const express = require ('express')
const app = express()
const port = 8080

app.use('/', express.static(`${__dirname}/public`));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const productos = [
    {
        title: 'Pepito',
        price: 2,
        id: 2
    },
    {
        title: 'Pepito',
        price: 2,
        id: 3
    },
    {
        title: 'Pepito',
        price: 2,
        id: 4
    },
    {
        title: 'Pepito',
        price: 2,
        id: 5
    }
]

const getProductos= (req,res)=>{
    res
    .status(200)
    .send(productos)
}

const getProducto= (req, res)=>{
    const id = req.params.id * 1
    console.log(id)
    const mapId = productos.find(el => el.id === id)

    if(!mapId){
        return res.status(404).json({
            status: 'fail',
            error: 'producto no encontrado'
        })
    }

    res
    .status(200)
    .json({
        status: 'sucess',
        productos: mapId
    })
}

const createProducto = (req,res)=>{
        
    const newId = productos[productos.length -1].id +1
    const newObj = Object.assign({id: newId}, req.body)
    productos.push(newObj)
    res.send('post ok')
}

const putProducto = (req,res)=>{
    const id = req.params.id * 1

    const mapId = productos.find(el => el.id === id)

    console.log(mapId)
    if(!mapId){
        return res.status(404).json({
            status: 'fail',
            error: 'producto no encontrado'
            })
        }

    res.send(productos)
}

const deleteProducto=(req,res)=>{
    if ( productos.length < req.params.id*1){
        return res.status(404)
    }
    res
    .status(204)
    .send(console.log('Producto eliminado'))
}

app.listen(port, ()=>{
    console.log(`Running port : ${port}`)
})

// Incorporar el Router de express en la url base '/api/productos' y configurar todas las subrutas en base a este.

app.route('/api/productos')
    .get(getProductos)
    .post(createProducto)

app.route('/api/productos/:id')
    .get(getProducto)
    .put(putProducto)
    .delete(deleteProducto)

