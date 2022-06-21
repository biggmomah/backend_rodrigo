const fs = require ('fs')
const express = require('express')
const app = express()

const server = app.listen(8080, '127.0.0.1', (res, req)=>{
    console.log(`Escuchando servidor ${server.address().port}`)
})


class Contenedor{
    constructor(){
        this.title = undefined
        this.price = undefined
        this.thumbnail = undefined
        this.id = undefined
    }

   save (title, price, thumbnail, obj){
    try{
        
        if(fs.existsSync('./producto.txt')){
            const data = fs.readFileSync('./producto.txt')
            const dataObj = JSON.parse(data)
            const lastProd = dataObj[dataObj.length - 1 ].id
            this.title = title
            this.price = price
            this.thumbnail = thumbnail
            this.id = lastProd + 1
            dataObj.push(obj)
            fs.writeFileSync('./producto.txt', `${JSON.stringify(dataObj)}`)
        }
        else{
            const array = []
            this.title = title
            this.price = price
            this.thumbnail = thumbnail
            this.id = 1
            array.push(obj)
            fs.writeFileSync('./producto.txt', `${JSON.stringify(array)}`)            
        }
    }

    catch{
        console.log('error')
    }
    console.log('nuevo archivo guardado')
   }

    getAll = () => {
        const data = fs.readFileSync('./producto.txt', 'utf-8')
        if(data) app.get('/productos', (req,res)=>{
            res.send('find')
        })
        
       
    }

    getRandom =() =>{ 
        const data = fs.readFileSync('./producto.txt', 'utf-8')
        const dataObj = JSON.parse(data)
        const randomP = dataObj[Math.round(Math.random() *( dataObj.length - 1 ))]
        return randomP
        
    }
}

const contenedor = new Contenedor()
contenedor.save('Escuadra', 123.45, '"https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png', contenedor)
contenedor.save('Calculadora', 234.56, 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png', contenedor)
contenedor.save('Globo Terráqueo', 345.67, 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png')


app.get('/productos', (req, res)=>{
    const getArray= getAll()
    res.send(getArray)
})

app.get('/productoRandom', (req,res)=>{
    const getRandom = getRandom()
    res.send(getRandom)
})