

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


// fher.imprimir();

// Esto se debe crear con una palabra new
function Persona(  nombre, edad ) { // Genrador de Instancia
    console.log('Se ejecuto esta línea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`) // this. => Realizar una refrencia al mismo objeto.
    }

}


const maria = new Persona( 'Maria', 19);// "new "Genrador de Instancia
const melissa = new Persona( 'Melissa',35 );
console.log(maria);
maria.imprimir();
melissa.imprimir();