
// class PersonaNatural // Se recomienda para nombrar las clases utlizar la primera letra de cada palabra en mayuscula.

class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    //'use strict'  viene por defecto implementado en las clases en JS
    nombre = '' ;
    codigo = '' ;
    frase  = '' ;
    comida = '' ;

    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase' ) {

        this.codigo = codigo;
        this.nombre = nombre;
        this.frase  = frase;

        Persona._conteo++;
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase(); // toUpperCase() => todo lo que reciba lo pasa a MAYUSCULA
    }

    get getComidaFavorita() {
        return `La comida favorita de ${ this.nombre } es ${this.comida }`;
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
const ironman   = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman' );
// console.log( ironman );



spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
// spiderman.comida = 'Duende Verde'; // cambia el valor de la propieda comida ( No es una buena practica )

// console.log( spiderman.getComidaFavorita );
// console.log( spiderman );


// Persona._conteo = 2;
console.log('Conteo statico : ', Persona._conteo );
console.log( Persona.conteo );


