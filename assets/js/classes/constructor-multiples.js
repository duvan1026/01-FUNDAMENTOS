


class Persona {

    static porObjeto({ nombre, apellido, pais }) { // Crea una nueva instancia de mi persona, pero utlizando el mismo constructor, con otro tipo de argumento.
        return new Persona( nombre, apellido, pais );
    }

    constructor( nombre, apellido, pais ) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;     

    }

    getInfo() {
        console.log(`info: ${ this.nombre }, ${ this.apellido }, ${ this.pais }`);
    }
}


const nombre1   = 'Melissa',
      apellido1 = 'Flores',
      pais1      = 'Honduras';

const fher = {
    nombre:   'Duvan',
    apellido: 'Castro',
    pais:     'Colombia',
}


const persona1 = new Persona( nombre1, apellido1, pais1 );
// const persona2 = new Persona( fher.nombre, fher.apellido );
const persona2 = Persona.porObjeto( fher ); // Constructores multiplies, para crear instancias de diferentes formas.


persona1.getInfo();
persona2.getInfo();


