


// Las variables primitivas se pasan por VAlOR
let a = 10;
let b = a;
a = 30;

console.log({ a,b });


// Los Objetos se pasan sus valores por referencias.
let juan = { nombre: 'Juan' };
let ana = { ...juan }; // OPERADOR SPREAD = separa los elementos, rompiendo la referencia en JavaScript entre objetos.
ana.nombre = 'ana';

console.log({ juan, ana });





const cambiaNombre = ({ ...persona }) => {// ...  OPERADOR SPREAD = separa los elementos, rompiendo la referencia en JavaScript entre objetos.
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );


console.log({ peter, tony });