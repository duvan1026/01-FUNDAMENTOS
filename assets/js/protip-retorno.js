function crearPersona( nombre, apellido ){
    // No es necesario aplicar el nombre del parametro si es tal cual el nombre de la variable.
    // nombre: nombre,
    return { nombre,apellido }
};


const persona = crearPersona( 'Duvan', 'Castro' );
console.log( persona );