
// class PersonaNatural // Se recomienda para nombrar las clases utlizar la primera letra de cada palabra en mayuscula.

class Persona {

    //'use strict'  viene por defecto implementado en las clases en JS
    nombre = '' ;
    codigo = '' ;
    frase  = '' ;

    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase' ) {

        this.codigo = codigo;
        this.nombre = nombre;
        this.frase  = frase;
    }

    //Metodo
    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase() {
        this.quienSoy();
        console.log(` ${ this.codigo } dice: ${ this.frase } `);
    }
}

const spiderman = new Persona('peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman' );
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman' );

console.log( spiderman );
console.log( ironman );

spiderman.quienSoy();
ironman.miFrase();


