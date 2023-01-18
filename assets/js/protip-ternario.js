
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


// operador ternario anidado simplificando if
const nota = 82.5; // A+ A B+,
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log({ nota, grado });



