

const fher = {
    nombre: 'Duvan',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`) // this. => Realizar una refrencia al mismo objeto.
    }

}


const Pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`) // this. => Realizar una refrencia al mismo objeto.
    }
}


fher.imprimir();