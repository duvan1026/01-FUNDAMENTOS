
// class PersonaNatural // Se recomienda para nombrar las clases utlizar la primera letra de cada palabra en mayuscula.

class Persona {

    //'use strict'  viene por defecto implementado en las clases en JS
    nombre = '' ;
    codigo = '' ;
    frase  = '' ;

    constructor( nombre, codigo, frase ) {

        if( !nombre )  throw Error('Necesitamos el nombre');

        this.codigo = codigo;
        this.nombre = nombre;
        this.frase  = frase;
    }

}

const spiderman = new Persona();
console.log( spiderman );