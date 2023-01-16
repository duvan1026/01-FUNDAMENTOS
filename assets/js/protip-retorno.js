// function crearPersona( nombre, apellido ){
//     // No es necesario aplicar el nombre del parametro si es tal cual el nombre de la variable.
//     // nombre: nombre,
//     return { nombre,apellido }
// };


// la implementación de la misma funcion crearPersona pero en funcion de flecha
const crearPersona = ( nombre, apellido ) => ({ nombre,apellido }); //los () despues de => representa que todo lo que esta dentro de ellos, es un objeto


const persona = crearPersona( 'Duvan', 'Castro' );
console.log( persona );


function imprimeArgumentos() {
    console.log( arguments );
}

// Parametro REST, el cual agrupa los argumentos enviados en un arreglo
// Sintaxis = ( ...NombreArgumentos ) => {} 
// Almacena todos los argumentos en forma de arreglo en NombreArgumentos
// Nota: Despues del parrametro REST no puede venir ninguna otra cosa.
const imprimeArgumentos2 = ( edad, ...args ) => {
    // console.log({ edad, args });
    return args;
};


// Almacenamos cada uno de los argumentos en las variables del arreglo.
const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'hola', 'Duvan');
console.log({ casado, vivo, nombre, saludo });

// almacenamos el valor apellido en la variable nuevoApellido
const { apellido: nuevoApellido } = crearPersona( 'Duvan', 'Castro' );
console.log( { nuevoApellido } );


// Destructuración de argumentos.


let tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster',],
}; // Si tiene {} es un objeto


// const imprimePropiedades = ( personaje ) => {
//     console.log( 'nombre: ', personaje.nombre );
//     console.log( 'codeName: ', personaje.codeName );
//     console.log( 'vivo: ', personaje.vivo );
//     console.log( 'edad: ', personaje.edad );
//     console.log( 'trajes: ', personaje.trajes );

// }

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {

    // edad = edad || 0; // Validación de dato, si no tiene valor se le asigan un valor de 0

    console.log({nombre});
    console.log({codeName});    
    console.log({vivo});
    console.log({edad});
    console.log({trajes});    
}

imprimePropiedades( tony );