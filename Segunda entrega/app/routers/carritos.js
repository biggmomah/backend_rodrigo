const carritoController = require('../controllers/carritos')
const { Router } = require('express')

const router = Router()

router
    .route('/')
    .get( carritoController.traerCarritos)
    .post( carritoController.agregarCarrito)
router
    .route('/:idCarrito/producto/:id',)
    .post( carritoController.agregarProductoACarrito)
    .delete( carritoController.eliminarProductoCarrito)

router
    .route('/:id')
    .delete( carritoController.eliminarCarrito)


module.exports = route