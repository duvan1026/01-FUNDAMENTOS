

let a = 9;


if( a >= 10 ) { // undefined, null, una asignación, son exepciones
    console.log('A es mayoro igual a 10');
} else {
    console.log('A es menor a 10');
};

// console.log('Fin del programa');

const hoy = new Date(); // new => sirve para crear instancias o nuevos objetos.
let dia = hoy.getDay(); // 0: Domingo, 1: lunes, 2: martes ......

console.log({ dia });

if( dia === 0 ) {
    
}