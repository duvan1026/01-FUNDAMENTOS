
let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log( 'Largo: ',  juegos.length ); // el metodo Length me permite saber cuantos elementos tiene el arreglo.

let primero = juegos[ 2 - 2 ];
let ultimo = juegos[ juegos.length - 1 ]; // Calculo para saber cual es el ultimo elemento del arreglo.

console.log({ primero, ultimo });


juegos.forEach( (elemento, indice, arr) => {
    console.log(elemento,indice,arr)
} );


let nuevaLongitud = juegos.push( 'F-Zero' );
console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });
