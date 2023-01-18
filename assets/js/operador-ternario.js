/**
 * Días de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

// Entra a un sitio web, para consultar si está abierto hoy...
const dia = 1; // 0: Domingo...  1: Lunes...
const horaActual = 11;

let horaApertura;
let mensaje; // Esta Abierto, Está cerrado, hoy abrimos a las xx

if ( dia === 0 || dia === 6 ){
    console.log('Fin de semana');
    horaApertura = 9;
} else {
    console.log('Día de semana ');
    horaApertura = 11;
}

if ( horaActual >= horaApertura ){
    mensaje = 'Está abierto';
} else {
    mensaje = `Esta cerrado, hoy abrimos a las ${ horaApertura }`;  // concatenación de string
}

console.log({ horaApertura, mensaje });
