

// // const arr = new Array(10); // Poco común su implementación.
// const arr = [];  // Es mas comun verla implementada.
// console.log(arr);


let videoJuegos = [ 'Maria 3', 'Megaman', 'Chrono Trigger' ];
console.log( { videoJuegos } );
// Obtener valor de una posición en especifica del arreglo.
console.log( videoJuegos[0] );


// Arreglo de multiple tipos de datos
let arregloCosas = [
    true,
    123,
    'Duvan',
    1 + 2,
    function(){},
    ()=>{},
    { a: 1 },
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman',
    ]],
];

// console.log({ arregloCosas });
// console.log( arregloCosas[2] );
// console.log( arregloCosas[7][3] ); // Navegar un arreglo dentro de un arreglo.
console.log( arregloCosas[7][4][1] ); 