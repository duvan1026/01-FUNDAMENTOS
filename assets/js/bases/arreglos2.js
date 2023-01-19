
let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log( 'Largo: ',  juegos.length ); // el metodo Length me permite saber cuantos elementos tiene el arreglo.

let primero = juegos[ 2 - 2 ];
let ultimo = juegos[ juegos.length - 1 ]; // Calculo para saber cual es el ultimo elemento del arreglo.

console.log({ primero, ultimo });

// Recorre el arreglo
juegos.forEach( (elemento, indice, arr) => {
    console.log(elemento,indice,arr)
} );


// Se agrega un elemento al arreglo
let nuevaLongitud = juegos.push( 'F-Zero' );
console.log({ nuevaLongitud, juegos });

// Se agrega un elemento al inicio del arreglo
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });

// Se elimina el ultimo elemento del arreglo.
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos});

// Borramos un valor en especifico del arreglo
let pos = 1;

console.log( juegos );
let juegosBorrados = juegos.splice( pos, 2 ); // en este caso borramos 2 datos apartir de la posicion pos(1) del arreglo y alamacenamos estos dos valores en la varrible asignada.
console.log({ juegosBorrados, juegos });


// Identificamos en que posicion indice del array se encuentra un objeto.
let metroidIndex = juegos.indexOf( 'Metroid' ); // CaseSenNsItIvE
console.log({metroidIndex});