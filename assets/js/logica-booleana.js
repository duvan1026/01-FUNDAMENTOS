

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
 


console.warn( 'Asiganaciones' );

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150; // 150 ultimo valor
const a2 = 'Hola' && 'Mundo' && soyFalso && true; // false

// Asignaciones mas comunes.
const a3 = soyFalso || 'Ya no soy falso'; // 'Ya no soy falso'
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true; // 'Ya no soy falso de nuevo', se ejecuta hasta cuando encuentra un valor y rompe el ciclo

const a5 = soyFalso || soyUndefined || regresaTrue || 'Ya no soy falso de nuevo' || true; // 'true', se ejecuta hasta cuando encuentra un valor y rompe el ciclo

console.log({ a1, a2, a3, a4 });



if( regresaTrue()  && regresaFalse() && (true || true || true || false) ){ // No realizar de esta forma, ya que es mala practica
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}


