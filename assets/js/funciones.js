// Función tradicional
function saludar( nombre ) {
    console.log( arguments );
    console.log('Hola ' + nombre);
};

// Funcion anonima - indica que la función respondera al nombre de "saludar2"
// const: medida de seguridad, no permite que sea reutilizado.
const saludar2 = function( nombre ) {
    console.log('Hola ' + nombre);
};


saludar( "Duvan", 40, true, 'Costa Rica' );
// saludar2( "Duvan Castro" );
