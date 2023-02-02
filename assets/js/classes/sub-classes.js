

class Persona {

    // Los metodos o atributos staticos pueden ser accedidos sin necesidad de crear una instancia.
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje () {
        console.log( this.nombre ); // undefined
        console.log( 'hola a todos, soy un mensaje statico' );
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

class Heroe extends Persona{

    clan = 'sin clan';

    constructor( nombre, codigo, frase){        
        super( nombre, codigo, frase ); // debemos llamar el constructor d ela clase padre
        this.clan = 'Los Avengers';
    }

    quienSoy(){
        console.log(`Soy ${ this.nombre }, ${ this.clan }`);
        super.quienSoy(); // Trae el metodo de la clase padre
    }
}

const spiderman = new Heroe('peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman' );
// const spiderman = new Heroe();
console.log( spiderman );

spiderman.quienSoy();