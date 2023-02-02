
// class PersonaNatural // Se recomienda para nombrar las clases utlizar la primera letra de cada palabra en mayuscula.

class Persona {

    //'use strict'  viene por defecto implementado en las clases en JS
    nombre = '' ;
    codigo = '' ;
    frase  = '' ;
    comida = '' ;

    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase' ) {

        this.codigo = codigo;
        this.nombre = nombre;
        this.frase  = frase;
    }

    set setComidaFavorita( comida ) {
        this.comida = comida;
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
// console.log( ironman );

spiderman.quienSoy();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
// spiderman.comida = 'Duende Verde'; // cambia el valor de la propieda comida ( No es una buena practica )

console.log( spiderman );



