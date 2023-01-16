// Función tradicional
function saludar( nombre ) {
    // console.log( arguments );
    // console.log('Hola ' + nombre);
    return [1,2,3,4];

    // esta linea no se ejecutará
    console.log('Soy un codifo que está despúes del return'); 
};

// Funcion anonima - indica que la función respondera al nombre de "saludar2"
// const: medida de seguridad, no permite que sea reutilizado.
const saludar2 = function( nombre ) {
    console.log('Hola ' + nombre);
};


// Funciones de flecha -- introducido en el emac-script 6 o javascript 2015
const saludarFlecha = () => {
    console.log('Hola Flecha');
}

// Funciones de flecha con argumentos, los () son opcionales, pero es buena practica implementarlo.
const saludarFlecha2 = ( nombre )  => {
    console.log('Hola ' + nombre);
}

const retornoSaludar = saludar( "Duvan", 40, true, 'Costa Rica' ); // 1
// console.log( retornoSaludar );
// saludar2( "Duvan Castro" );

// saludarFlecha();
// saludarFlecha2( 'Melissa' );

function sumar( a,b ) {
    return a + b;
}


// const sumar2 = ( a,b ) => {
//     return a + b;
// }
// Reemplaza la función sumar2 comentada, 
// solo se aplica si solo la función retorna y no tiene mas lineas de codigo.
const sumar2 = ( a,b ) => a + b;




console.log( sumar(1,2) );
console.log( sumar2(1,2) );
