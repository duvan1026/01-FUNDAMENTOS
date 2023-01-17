

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
    console.log('Domingo');
} else if( dia === 1 ) {

    console.log('Lunes')
   
    // if( dia === 1 ){
    //     console.log('Lunes');
    // } else {
    //     console.log('No es lunes ni domingo');
    // }
} else if( dia === 2 ) {
    console.log('Martes');
} else{
    console.log(' No es lunes, martes o domingo ...')
}