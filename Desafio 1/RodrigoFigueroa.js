class Usuario{
    constructor(nombre,apellido, libros, mascotas){
        this.nombre = nombre,
        this.apellido=apellido,
        this.libros= libros,
        this.mascotas=mascotas
    }

    getFullName(){
      return `Nombre completo: ${this.nombre} ${this.apellido}`
    }

    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota)
    }

    countMascotas(){
        return (this.mascotas).length
    }

    addBook(titulo, autor){
        this.libros.push({titulo,autor})
    }

    getBookNames(){
       const nombresLibros = this.libros.map(function(libro){
           return libro.titulo
       })
       return nombresLibros
    }
}



const a = new Usuario('Rodrigo', 'Figueroa', [{titulo:'Harry Potter y la piedra filosofal', autor:'J. K. Rowling'},{titulo:'Harry Potter y el prisionero de Azkaban', autor:'J. K. Rowling'},{titulo:'Harry Potter y la Orden del Fénix', autor:'J. K. Rowling'}], [])

// Si quisiera agregar directamente una mascota sin tener que pasar por todos los anteriores variables, como tendria que hacer?




console.log(a.getFullName())
console.log(a.countMascotas())
a.addMascota('vibora' , 'pepe')
console.log(a.countMascotas())
console.log(a.getBookNames())
a.addBook('Harry Potter y las reliquias de la Muerte', 'J. K. Rowling')
console.log(a.getBookNames())

