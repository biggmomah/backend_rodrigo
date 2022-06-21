const productoController = require('../controllers/productos')
const { Router } = require('express')

const router = Router()
// general
router
    .route('/')
    .post( productoController.guardarProducto)
    .get( productoController.mostrarProductos)

// By ID

router
    .route('/:id')
    .get( productoController.mostrarProducto)
    .put( productoController.actualizarProducto)
    .delete( productoController.eliminarProducto)


module.exports = router