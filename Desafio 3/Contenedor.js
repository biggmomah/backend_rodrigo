const fs = require ('fs')
const path = require('path')

class Contenedor{
    constructor(filename){
        this.filename = filename
    }

    async createFileIfNoneExist() {
		let file;
		try {
			// Leo si el archivo existe
			file =  fs.readFile(this.filename, 'utf-8');
			// Si existe, lo devuelvo
			return file;
		} catch (error) {
			// Si hay algun error, verifico que sea porque el archivo no existe y creo uno con un array vacio
			if (error.code == 'ENOENT') {
			    fs.writeFile(this.filename, '[]');
				// Luego de crearlo, leo su valor para que la funcion devuelva un valor al ser llamada
				file =  fs.readFile(this.filename, 'utf-8');
			} else {
				// Si el error es por otra cosa, lo muestro por consola
				console.log(error);
			}
		}

		return file;
	}
}

let contene = new Contenedor()

contene.createFileIfNoneExist('PJO')