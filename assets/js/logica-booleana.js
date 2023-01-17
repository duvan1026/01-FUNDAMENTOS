

const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

//***** Not o la negación */
console.warn('Not o la negación');
console.log( true ); // true
console.log( !true ); // false
console.log( !false ); // true

console.log( !regresaFalse() ); // true


//***** ANd */
console.warn( 'And' );// true si todos los valores son verdaderos
console.log( true && true ); // true
console.log( true && false ); // false
console.log( true && !false ); // true

console.log('=============='); // Separador
console.log( regresaFalse()  && regresaTrue() ); // false
console.log( regresaTrue()  && regresaFalse() ); // false

console.log('=============='); // Separador
regresaTrue()  && regresaFalse(); // Se ejecutan las funciones segun la logica, en este caso se ejecutan las dos porque la primera tiene como resultado un true
regresaFalse()  &&  regresaTrue(); // Se ejecutan las funciones segun la logica, en este caso se ejecutan la priemra función porque da como resultado la primera un false

console.log('4 condiciones', true && true && true && false );


//***** OR */
console.warn('OR'); // true, almenos una condicion debe estar en true
console.log( true || false ); // true
console.log( false || false ); // false

console.log( regresaTrue()  || regresaFalse() ); // Se ejecutan las funciones segun la logica, en este caso se ejecutan las primera porque es verdadero

console.log('4 condiciones', true || true || true || false ); /// true
 






