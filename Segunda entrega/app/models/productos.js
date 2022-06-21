const mongoose = require('mongoose')


const carritoSchema = new mongoose.Schema({
    fecha: Date,
    productos: [{ type: Schema.Types.ObjectId, ref: 'productos' }]
});

module.exports = mongoose.model('carritos', carritoSchema);