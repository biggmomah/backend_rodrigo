const mongoose = require('mongoose')

const prodsSchema = new mongoose.Schema({
    timestamp: Date,
    name: String,
    description: String,
    code: Number,
    image: String,
    price: Number,
    stock: Number
});

module.exports = mongoose.model('productos', prodsSchema);
