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