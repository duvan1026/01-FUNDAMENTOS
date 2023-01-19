/**
 * Días de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

// Entra a un sitio web, para consultar si está abierto hoy...
const dia = 1; // 0: Domingo...  1: Lunes...
const horaActual = 11;

let horaApertura;
let mensaje; // Esta Abierto, Está cerrado, hoy abrimos a las xx

// if ( dia === 0 || dia === 6 ){
// if ( [0,6].includes( dia ) ){ // se crea un arreglo con los dias de fin de semana y se aplica el metodo includes para preguntar si existe ese dia dentro del arreglo
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Día de semana ');
//     horaApertura = 11;
// }
// Reducción del codigo anterior con operación ternaria
horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;

// if ( horaActual >= horaApertura ){
//     mensaje = 'Está abierto';
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${ horaApertura }`;  // concatenación de string
// }

//Reducción del codigo anterior con operador ternario.
mensaje = ( horaActual >= horaApertura ) ? `Está abierto` : `Esta cerrado, hoy abrimos a las ${ horaApertura }`;


console.log({ horaApertura, mensaje });
