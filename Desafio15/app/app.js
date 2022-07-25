const express = require('express')
const app = express()
const ejs = require('ejs')

const routesProductos = require('./routers/productos')
const routesCarritos = require('./routers/carritos')
const routesAuth = require('./routers/auth.router')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views/partials')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/productos', routesProductos)
app.use('/api/carritos', routesCarritos)
app.use('/auth', routesAuth )





module.exports = app