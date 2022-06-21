const fs = require ('fs')

class Contenedor{
    constructor(fileName){
        this.fileName = fileName
    }

    async save(producto){
        try{
            try{
                // Esperamos a que lea archivo
                await fs.promises.readFile(`${__dirname}/${this.fileName}`)
                // Si lo lee,sale console
                console.log('EXISTE')

                // De existir, lo parseamos como objeto
                let data =await fs.promises.readFile(`${__dirname}/${this.fileName}`)
                data = JSON.parse(data)

                producto.id = data.length + 1
                data.push(producto)
                this.deleteAll()
                await fs.promises.writeFile(this.fileName, JSON.stringify(data))          
            }catch(error){
                console.log('NO EXISTE')

                producto.id = 1
                const productos= []
                productos.push(producto)
                await fs.promises.writeFile(`${__dirname}/${this.fileName}`, JSON.stringify(productos))
               
            }

            return console.log(producto)
        }catch(error){
            console.log(error)
        }
    }

    async getById(id){
        try{
            let data = await fs.promises.readFile(`${__dirname}/${this.fileName}`)
            data = JSON.parse(data)

            // BUSCAMOS EL ID
            let prod = data.filter(el => el.id == id)
            return console.log(prod)
        }catch(error){
            console.log(error)
        }
    }

    async getAll(){
        try{
            let data = await fs.promises.readFile(`${__dirname}/${this.fileName}`)
            data = JSON.parse(data)

            const newData = data.filter(el => el.id != id)

            await fs.promises.writeFile(`${__dirname}`, JSON.stringify(newData))
        }catch(error){
            console.log(error)
        }
    }

    async deleteById(){
        try {
            await fs.promises.writeFile(`${__dirname}/${this.fileName}`, '')
        } catch (error) {
            console.log(error);
        }
    }

    
}


const  prueba =  new Contenedor('productos.txt')


 
    prueba.save({ nombre: 'pizza', precio: '10', thumbnail: 'saddasdasdwsad' })
    prueba.save({ nombre: 'pi123zza', precio: '11111', thumbnail: 'saddasdasdwsad' })

    prueba.save({ nombre: '123', precio: '1111110', thumbnail: 'saddasdasdwsad' })

    // prueba.getById(1)
    //prueba.getAll()
   // prueba.deleteById(2)
