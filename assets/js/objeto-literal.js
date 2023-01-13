
let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster',],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultimo pelicula': 'Infinity War',
}; // Si tiene {} es un objeto


console.log( personaje );
console.log('Nombre :', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('Coors', personaje.coords);
console.log('Lat', personaje.coords.lat);

console.log('No. Trajes:', personaje.trajes.length);
console.log('Ultimo Traje:', personaje.trajes[personaje.trajes.length - 1]); // se realiza el calculo para obtener el ultimo traje.


const x = 'vivo';
console.log( 'vivo :', personaje[ x ] );

console.log('Ultima pelicula:', personaje['ultimo pelicula']);

// Más detalles

delete personaje.edad; // Borramos como tal la propiedad edad.
console.log( personaje );

personaje.casado = true; // Crear una nueva propiedad en el objeto.

const entriesPares = Object.entries( personaje ); // Devuelve una matriz con las clave-pares de propiedad del objeto.
console.log( entriesPares );

Object.freeze( personaje ); // Congela el objeto, denegando cualquier cambio en sus propiedades.

personaje.dinero = 1000000000;
personaje,casado = false;
personaje.direccion.ubicacion = 'Costa Rica';
console.log( personaje );

const propiedades = Object.getOwnPropertyNames( personaje ); // Me trae los nombres de las propiedades del objeto
const valores     = Object.values( personaje ); // Me trae los valores de las propiedades del objeto.
console.log({ propiedades, valores });





