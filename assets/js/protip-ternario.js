
// const elMayor = ( a,b ) => {
//         return ( a > b ) ? a : b;
// }
//Reducción función anterior
const elMayor = ( a,b ) => ( a > b ) ? a : b;

const tieneMembresia = ( miembro ) => ( miembro ) ? '2 Dolares' : '10 Dolares';


console.log( elMayor( 20, 15 ));
console.log( tieneMembresia( false ) );


//integración operador ternario en un arreglo
const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    // (() => 'Nick Fury')(), // Funcion anonima autoinvocada
    elMayor(10, 15),
];

console.log( amigosArr );