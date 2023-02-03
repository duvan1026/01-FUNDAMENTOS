


class Singleton {

    static instancia;
    nombre = '';

    constructor( nombre = '' ){

        //Ejemplo para comprobar la funcionaldiasd del !!
        // const a = undefined;
        // console.log(a);
        // console.log(!a);
        // console.log(!!a);


        if( !!Singleton.instancia ){
            return Singleton.instancia;

        }

        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

// Todas las instancias creadas apuntan al mismo espacio en memoria
// por consiguiente todoas sus propiedades va a punatr al mismo lugar
const instancia1 = new Singleton('Iroman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('BlackPanther');





console.log( `Nombre en la instancia es: ${ instancia1.nombre }` );
console.log( `Nombre en la instancia es: ${ instancia2.nombre }` );
console.log( `Nombre en la instancia es: ${ instancia3.nombre }` );

