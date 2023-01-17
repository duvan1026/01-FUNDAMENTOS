

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


// Sin usar if else, o switch, unicamente objetos
 let dia1 = 6; // 0: domingo, 1: lunes....

 //************** */ Solución con Objetos******************
 // Manejo de funciones de flecha independientes en cada posicion del objeto
// const diaLetras = {
//     0: ()=> 'Domingo - 0',
//     1: ()=> 'Lunes - 1',
//     2: ()=> 'Martes - 2',
//     3: ()=> 'Miercoles - 3',
//     4: ()=> 'Jueves - 4',
//     5: ()=> 'Viernes - 5',
//     6: ()=> 'Sabado - 6',
// }

// día de la semana
// console.log( diaLetras[dia1] || 'Dia no es valido'); // Permite evaluar si esta recibiendo un dato valido, sino, envia mensaje 'Dia no valido'
// console.log( diaLetras[dia1]() ); // Ejecuta una función de flecha en cada posicion del objeto


 //************** */ Solución con Arreglos******************
 const diaLetras = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado',];

 // día de la semana
 console.log( diaLetras[dia1]);
 

