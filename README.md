# 01-fundamentos

Primera carpeta creada  del curso javascript de Udemy del instructor Fernando Herrera.

Javascript es un lenguaje Interpretado. 

## Polyfills

Es un código que provee el funcionamiento de una nueva característica de JavaScript(ES6), en versiones viejas como ES5.

## Variable

Es un contenedor de información que apunta a un lugar en memoria. Dicha información puede cambiar en el futuro.

### Tipos de variables

Las variables se inicializar y declarar de 3 principales formas: 

* **let** 

   Permite manejar valores variables, sin importar su tipo de dato, es soportada por la gran mayoria de navegadores, No sobrescribe las variables que se encuentran en el objeto global window o del bloque donde este corriendo JavaScript.
* **const**


   Permite manejar valores constates, sin importar el tipo de datos,las constantes no tienen propiedades para esteblecer o cambiar el valor, lo cual las hace mas ligera que otro tipo de variable como lo son let o var, No sobrescribe las variables que se encuentran en el objeto global window o del bloque donde este corriendo JavaScript.
* **var** (No es una buena practica)

   Permite manejar valores variables, sin importar su tipo de dato, al utilizarlo, el dato almacenando se guarda en un objeto global llamado window, lo cual es un problema porque permite reemplazar propiedades y objetos propios del mismo.

   **Nota:** Se recomienda utilizarlo solo si se esta trabajando con navegadores web muy antiguos( inferiores o iguales a versiones del 2015), para asi aumentar la compatibilida.

Las variables **var** en JavaScript se define **Undefined** si esta no ha sido previamente declarada, es decir, JavaScript realiza un scaneo rapido del codigo e identifica que ha pesar de que la variable este declarada pero se esta implementando antes de su declaración la definira de ese modo, de otro modo, declarando la variable tipo **let** o **const**, dara como resultado un error de tipo **No ha sido declarada previamente dicha varible**, dando a entender que no es posible utilizar la variable antes de ser inicializada. 

### Tipos de datos de una variable.

**JavaScript** es un lenguaje de programación que funciona a partir de variables. Estas variables se clasifican mediante tipos. Entonces, en JavaScript, tenemos los tipos primitivos y los tipos no primitivos.

#### Datos primitivos:

Los tipos primitivos en JavaScript son aquellos valores que no son un objeto y tampoco tienen métodos. Además, **los tipos primitivos son valores inmutables (no se pueden modificar)**.

Existen varios tipos de datos primitivos, los cuales son:

* Boolean: Los tipos primitivos en JavaScript booleanos son todos aquellos valores que se representan en términos de **verdadero y falso (true/false)**. 

* Null: El tipo primitivo null quiere decir que tenemos un **valor nulo** y sin valor en lo absoluto.

* Undefined: El tipo primitivo undefined es una manera de representar la ausencia de un valor. **undefined quiere decir que tenemos un valor indefinido**. En pocas palabras un valor undefined es una variable declarada que aún no se le asigna valor.

* number: El tipo primitivo number se refiere a **todos los valores que representan un número**. Estos valores pueden ser números enteros, como lo sería 3, o números racionales, como lo sería 3.1416, lo cual indica que para JavaScript no hay diferencia entre los enteros, los flotantes, etc, considerandolos casi igual.

* String: Un string también se conoce en programación como una cadena de caracteres. **Los string son muy útiles para almacenar datos que se representan en forma de texto**. En pocas palabras un **String es una cadena de caracteres**.

* Symbol: Es un valor único que no es igual a ningún otro valor.



#### Objetos literales:

Los objetos en JavaScript nos ayudan agrupar información. Un objeto no es más que un conjunto de propiedades en donde cada propiedad está compuesta de una llave y un valor. Veamos un primer ejemplo:

```
var persona = {
  nombre: "Germán",
  apellido: "Escobar",
  edad: 35,
  estatura: 1.8
}
```

En este ejemplo estamos creando un objeto y lo estamos almacenando en la variable persona. **Un objeto se define utilizando corchetes {}**. Las propiedades se separan con coma (,) y las llaves y valores se separan con dos puntos (:).

En este objeto estamos almacenando la información de una persona, pero en un objeto podemos almacenar cualquier tipo de información que requiera esa asociación llave-valor.

El valor de una propiedad puede **ser cualquier tipo de datos** en JavaScript: **números, cadenas de texto, booleanos, arreglos e incluso funciones y otros objetos**.

##### Obteniendo valores de un objeto

Para obtener el nombre de la persona en el objeto que definimos previamente lo haríamos utilizando persona.nombre. Por ejemplo:

```
console.log(persona.nombre);
```

Para obtener el valor de una llave en un objeto utilizamos la notación punto (.): el nombre de la variable, seguido de punto, seguido del nombre de la llave:

```
console.log(persona.nombre); // imprime Germán
console.log(persona.apellido); // imprime Escobar
console.log(persona.edad); // imprime 35
console.log(persona.estatura); // imprime 1.8
```

Existe otra forma equivalente de obtener el valor de una llave utilizando corchetes cuadrados ([]):

```
persona["nombre"]
```

Esta notación es útil para obtener los valores de forma dinámica. Por ejemplo:

```
var llave = "nombre";
console.log(persona[llave]);
```

Primero definimos una variable **llave**, a la que le asignamos el valor **"nombre"** y utilizamos esa variable para obtener el valor. Esto va a ser útil más adelante cuando estemos recorriendo las propiedades de un objeto.

##### Agregando nuevas propiedades al objeto

Es posible agregar más propiedades a un objeto después de que ha sido creado. Por ejemplo, podríamos agregar una propiedad con llave peso y valor 70 de la siguiente forma:

```
persona.peso = 70;
```

##### Modificando propiedades del objeto

Es también posible modificar los valores de las propiedades de un objeto. Por ejemplo, si queremos cambiar el valor de la llave peso lo podemos hacer de la siguiente forma:

```
persona.peso = 65;
```

##### Eliminando propiedades de un objeto

Para eliminar una propiedad de un objeto utiliza el operador delete:

```
delete person.peso;
```

####  Metodos estáticos

* Object.assign()

   El método Object.assign() copia todas las propiedades enumerables de uno o más objetos fuente a un objeto destino. Devuelve el objeto destino.

   ```
   const target = { a: 1, b: 2 };
   const source = { b: 4, c: 5 };

   const returnedTarget = Object.assign(target, source);

   console.log(target);
   // Expected output: Object { a: 1, b: 4, c: 5 }

   console.log(source);
   // Expected output: true

   console.log(returnedTarget);
   // Expected output: true
   ```

   * Sintaxis

      ```
      Object.assign(objetivo, ...fuentes)
      ```

   *  Parámetros

      * objetivo: El objeto destino.

      * fuentes: Los objetos origen.

   * Valor devuelto

      El objeto destino.

   ##### Ejemplos

   * Clonando un objeto

      ```
      let obj = { a: 1 };
      let copy = Object.assign({}, obj);
      console.log(copy); // { a: 1 }
      ```
   
   * Fusionando objetos

      ```
      var o1 = { a: 1 };
      var o2 = { b: 2 };
      var o3 = { c: 3 };

      var obj = Object.assign(o1, o2, o3);
      console.log(obj); // { a: 1, b: 2, c: 3 }
      console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.
      ```
   
   * Fusionando objetos con las mismas propiedades

      ```
      var o1 = { a: 1, b: 1, c: 1 };
      var o2 = { b: 2, c: 2 };
      var o3 = { c: 3 };

      var obj = Object.assign({}, o1, o2, o3);
      console.log(obj); // { a: 1, b: 2, c: 3 }
      ```
   
   **Nota:** Para visualizar en mas profundidad este metodo por favor visite el siguiente [link](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#clonando_un_objeto).

   
* Object.assign()

   El método Object.create() **crea un objeto nuevo**, utilizando un **objeto existente** como el prototipo del nuevo objeto creado.

   ```
   const person = {
   isHuman: false,
   printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
      }
   };

   const me = Object.create(person);

   me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
   me.isHuman = true; // Inherited properties can be overwritten

   me.printIntroduction();
   // Expected output: "My name is Matthew. Am I human? true"
   ```

   * Sintaxis

      ```
      Object.create(proto[, propertiesObject])
      ```
   * Parámetros
      
      * proto: Objeto el cual debe ser el prototipo del nuevo objeto creado.
      
      * propertiesObject : (Opcional) Si se especifica y no es undefined, un objeto cuyas propiedades enumerables propias (es decir, aquellas propiedades definidas sobre si mismo y no son propiedades enumerable a lo largo de su cadena de prototipos) espefica descriptores de propiedad para ser agregadas al objeto recien creado, con los nombres de propiedad correspondiente. Estas propiedades corresponden al segundo argumento de Object.defineProperties.

   * Valor devuelto

      Un nuevo objeto con el prototipo y propiedades del objeto especificado.

   * Excepciones
      
      Una excepción TypeError si el parámetro propertiesObject es null o un objeto envolvente no primitivo.
   
   ##### Ejemplos

   * Herencia clásica con Object.create()

      Debajo se encuentra un ejemplo de cómo usar Object.create() para lograr herencia clásica. Este es para herencia simple, la cual es todo lo que soporta JavaScript.

      ```
      // Shape - superclase
      function Shape() {
      this.x = 0;
      this.y = 0;
      }

      // método de la superclase
      Shape.prototype.move = function(x, y) {
         this.x += x;
         this.y += y;
         console.info("Shape moved.");
      };

      // Rectangle - subclase
      function Rectangle() {
      Shape.call(this); // llama al contructor de la superclase.
      }

      // subclase extiende superclase
      Rectangle.prototype = Object.create(Shape.prototype);
      Rectangle.prototype.constructor = Rectangle;

      var rect = new Rectangle();

      console.log('¿Es rect una instancia de Rectangle?',
      rect instanceof Rectangle); // true
      console.log('¿Es rect una instancia de Shape?',
      rect instanceof Shape); // true
      rect.move(1, 1); // Imprime, 'Shape moved.'
      ```

      Si desea heredar desde múltiples objetos, entonces los mixins son una posibilidad.

      ```
      function MyClass() {
      SuperClass.call(this);
      OtherSuperClass.call(this);
      }

      // inherit one class
      MyClass.prototype = Object.create(SuperClass.prototype);
      // mixin another
      Object.assign(MyClass.prototype, OtherSuperClass.prototype);
      // re-assign constructor
      MyClass.prototype.constructor = MyClass;

      MyClass.prototype.myMethod = function() {
      // do something
      };
      ```

    **Nota:** Para visualizar en mas profundidad este metodo por favor visite el siguiente [link](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#clonando_un_objeto).     
   

* Object.defineProperties()

   El metodo Object.defineProperties() **define nuevas o modifica propiedades existentes** directamente en el objeto, retornando el objeto.

   * Sintáxis

      ```
      Object.defineProperties(obj, propiedades)
      ```
   
   * Parámetros

      * obj : El objeto sobre el cual se crearán o modificaran sus propiedades.

      * propiedades: Un objeto cuyas propiedades enumerables propias consituyen descriptores para las propiedades a ser definidas o modificadas.

      ##### Ejemplo

         ```
         Object.defineProperties(obj, {
         "property1": {
            value: true,
            writable: true
         },
         "property2": {
            value: "Hello",
            writable: false
         }
         // etc. etc.
         });
         ```

         **Nota:** Para visualizar en mas profundidad este metodo por favor visite el siguiente [link](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties). 

Para profundizar y observas mas sobre estos momentos puedes ingresar al siguiente [link](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object).


## Palabras reservadas.

Las palabras reservadas y la estructura correcta de los identificadores son algo importante, debemos conocer cuales son y evitar su uso, incluso en aquellos casos donde son aceptadas para algún tipo de artefacto del lenguaje. Aunque los editores modernos suelen avisar de que nos estamos equivocando, son muchas las ocasiones donde perdemos tiempo intentando comprender que está pasando porque hemos utilizado una palabra reservada sin darnos cuenta, por lo cual, las palabras reservadas **son palabras que tienen un uso específico para el cual fueron creadas**.

En la siguiente imagen se evidencian alguna palabras reservadas y palabras que se deben evitar usar al momento de declarar una variable, función, entre otras.

![Palabras reservadas en JavaScript](https://github.com/duvan1026/01-fundamentos/blob/developer/assets/images/palabras-reservadas.png)

En el siguiente [link](https://mothereff.in/js-variables#%E0%B2%A0%5f%E0%B2%A0), podemos verificar si la palabra a implementar es aceptada por la sintasis del lenguaje de javaScript.


### Estandar para nombrar variables

* No pueden crear nombres de variables que empiecen con números,punto entre medio del nombre, entre otros, como por ejemplo:

   ```
      let 1abc = 123;
      let objeto123.123 = 123;
      let año = 1233;
   ```

* Se pueden crear variables de las siquientes formas:

   ```
      let _abc = 123;
      let objeto123 = 1;
      let precio99_99 = 123;
   ```

* Al nombrar las variables, su nombre debe tener algun sentido semántico, algo significativo que represente la función de dicha variable.

   ```
      let jugadorConPuntajeMasAlto = 'Duvan';
   ```
* Manejar Lower Camel case para nombre de variables **( primerSegundoTercero )** y oper kamel case **(PrimerSegundoTercero)** para el nombre de clases.



## Breakpoints (puntos de interrupción)

Un breakpoint es un punto de código donde el debugger pausará automáticamente la ejecución de JavaScript.

Mientras se pausa el código, podemos examinar las variables actuales, ejecutar comandos en la consola, etc. En otras palabras, podemos depurar.

![Esta es una imagen de ejemplo](https://es.javascript.info/article/debugging-chrome/chrome-sources-breakpoint.svg)

Siempre podemos encontrar una lista de los breakpoints en el panel derecho. Esto es muy útil cuando tenemos muchos breakpoints en varios archivos. Ya que nos permite:

* Saltar rápidamente al breakpoint en el código (haciendo click en él dentro del panel).
* Desactivar temporalmente el breakpoint desmarcándolo.
* Eliminar el breakpoint haciendo click derecho y seleccionando quitar/eliminar/remove.
* …y mucho más.

### Tipos de instrucciones para imprimir en consola.

* **console.log()**  :  Permite Imprimir un mensaje en la consola.
* **console.warn()** :  Permite Imprimir un warning en consola.
* **console.error()**: Permite Imprimir un mensaje de error.
* **console.table({ });**: Permite Imprimir un objeto dinamico en consola.

## Tipos de formas de ingreso de información del usuario.

Las siguientes instrucciones son bloqueantes, es decir bloquean al navegador web hasta que se reciba una accion por parte del usuario, cabe resaltar que estas instrucciones pueden manejar mediante librerias que mejoran su aspecto visual.

Estos instrucciones son metodos que vienen dentro del objeto window, es decir si se corre en otro lugar que no sea el navegador web o que no contenga la instancia de window no va a funcionar.

* **alert** ( alert(message) ): su finalidad es la de mostrar por pantalla mensajes de alerta encuadrados en una pequeña ventana modal.
* **prompt** ( prompt(message, default) ); Determina si el usuario ha clickado en ‘Aceptar’, ‘Cancelar’ o si hay metido texto en dicha ventana modal, retorna el texto que el usuario escriba en él.
* **confirm** ( confirm(message) ): Nos ayuda a determinar si el usuario ha clickado en ‘Aceptar’, ‘Cancelar’.

## Arreglos

Son un objeto muy parecido a una lista de información, que contienen un grupo de elementos, los cuales permiten almacenar colecciones ordenadas de datos a través de nombres.

Usualmente , esa información dentro del arreglo es del mismo tipo de dato... **Pero en JavaScript no se cumple esta regla**. 

### Declaración

Hay dos sintaxis para crear un array vacío:

   ```
   let arr = new Array();
   let arr = [];
   ```

Recomienda las buenas practicas implementar la segunda opción. Podemos suministrar elementos iniciales entre los corchetes:

   ```
   let fruits = ["Apple", "Orange", "Plum"];
   ```

### Modificar elemento en especifico

Los elementos del array están numerados comenzando desde cero. 

* Se obtiene un elemento por su número entre corchetes de la siguiente manera:

   ```
   let fruits = ["Apple", "Orange", "Plum"];

   alert( fruits[0] ); // Apple
   alert( fruits[1] ); // Orange
   alert( fruits[2] ); // Plum
   ```

* Podemos reemplazar un elemento:

   ```
   fruits[2] = 'Pear'; // ahora ["Apple", "Orange", "Pear"]
   ```

* …o agregar uno nuevo al array:

   ```
   fruits[3] = 'Lemon'; // ahora ["Apple", "Orange", "Pear", "Lemon"]
   ```

### Metodos Basicos 

Son funciones que vienen internas en los arreglos.

#### forEach()

forEach() ejecuta la función callback una vez por cada elemento presente en el array en orden ascendente. En otras palabras **recorre el arreglo elemento por elemento**.

 * Parametros.

   * Callback: Función a ejecutar por cada elemento, que recibe tres argumentos:

      *currentValue: El elemento actual siendo procesado en el array.
      *index (Opcional): El índice del elemento actual siendo procesado en el array.
      *array (Opcional): El vector en el que forEach() esta siendo aplicado.
   
   * thisArg(Opcional): Valor que se usará como this cuando se ejecute el callback.

##### Ejemplo

* Imprimiendo el contenido de un array.

  El siguiente código imprime una línea por cada elemento en un array:

   ```
   function logArrayElements(element, index, array) {
      console.log("a[" + index + "] = " + element);
   }

    // Nótese que se evita el 2° índice ya que no hay ningún elemento en esa posición del array  
   [2, 5, , 9].forEach(logArrayElements);


   // salida:
   // a[0] = 2
   // a[1] = 5
   // a[2] = 9
   ```


#### push()

El método push() **añade uno o más elementos al final de un array** y devuelve la nueva longitud del array.

* Parametros.

   Los elementos a añadir al final del array.

* Valor devuelto.

   La propiedad length del objeto sobre el cual se efectuó la llamada, es decir el **tamaño del objeto**

##### Ejemplo

* Añadiendo elementos a un array

   El siguiente código crea el array sports que contiene dos elementos, luego añade 2 elementos más. Tras ejecutar el código, sports contiene 4 elementos: "soccer", "baseball", "football" and "swimming".

   ```
   var sports = ['soccer', 'baseball'];
   var total = sports.push('football', 'swimming');

   console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
   console.log(total);  // 4
   ```

#### unshift()

El método unshift() **agrega uno o más elementos al inicio del array**, y devuelve la nueva longitud del array.

##### Sintaxis

   ```
   arr.unshift(elemento1[, ...[, elementoN]])
   ```

* Parámetros
   
   **elementoN** : Elementos a agregar al inicio del array.

* Devuelve
   
   La nueva propiedad length del objeto sobre el cual el método fue llamado.

##### Ejemplos

   ```
   var arr = [1, 2];

   arr.unshift(0); // resultado de la llamada es 3, la nueva longitud del array
   // arr es [0, 1, 2]

   arr.unshift(-2, -1); // = 5
   // arr es [-2, -1, 0, 1, 2]

   arr.unshift([-3]);
   // arr es [[-3], -2, -1, 0, 1, 2]
   ```

#### pop()

El método pop() **elimina el último elemento de un array y lo devuelve**. Este método cambia la longitud del array.

##### Sintaxis

  ```
  arr.pop()
  ```

* Valor devuelto

   El elemento que ha sido eliminado del array; undefined si el array está vacío.

##### Ejemplos

* Eliminando el último elemento de un array

   El siguiente código crea el array myFish, que contiene cuatro elementos, a continuación, elimina su último elemento.

   ```
   var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

   var popped = myFish.pop();

   console.log(myFish); // ['angel', 'clown', 'mandarin' ]

   console.log(popped); // 'sturgeon'
   ```

#### Splice()

El método splice() **cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos**.

##### Sintaxis
   
   ```
   array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
   ```

* Parámetros

   * start 

      Índice donde se comenzará a cambiar el array (con 0 como origen). Si es mayor que la longitud del array, el punto inicial será la longitud del array. Si es negativo, empezará esa cantidad de elementos contando desde el final.

   * deleteCount Opcional

       Un entero indicando el número de elementos a eliminar del array antiguo.

      Si deleteCount se omite, o si su valor es mayor que arr.length - start (esto significa, si es mayor que el número de elementos restantes del array, comenzando desde start), entonces todos los elementos desde start hasta el final del array serán eliminados.

      Si deleteCount es igual a 0 o negativo, no se eliminará ningún elemento. En este caso, se debe especificar al menos un nuevo elemento (ver más abajo).

   * item1, item2, ... Opcional
         
      Los elementos que se agregarán al array, empezando en el índice start. Si no se especifica ningún elemento, splice() solamente eliminará elementos del array.

* Valor devuelto

   Un array que contiene los elementos eliminados. Si sólo se ha eliminado un elemento, devuelve un array con un solo elemento. Si no se ha eliminado ningún elemento, devuelve un array vacío.

##### Ejemplo.

* Eliminar 0 elementos desde el índice 2 e insertar "drum"

   ```
   var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
   var removed = myFish.splice(2, 0, 'drum');

   // myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
   // removed is [], no elements removed
   ```

* Eliminar 1 elemento desde el índice 3

   ```
   var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
   var removed = myFish.splice(3, 1);

   // removed is ["mandarin"]
   // myFish is ["angel", "clown", "drum", "sturgeon"]
   ```


* Eliminar 2 elementos desde el índice 0 e insertar "parrot", "anemone" y "blue"

   ```
   var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
   var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');

   // myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
   // removed is ["angel", "clown"]
   ```

#### indexOf()

El método indexOf() **retorna el primer índice en el que se puede encontrar un elemento dado en el array**, ó retorna -1 si el elemento no esta presente.

##### Sintaxis

   ```
   array.indexOf(searchElement[, fromIndex])
   ```

* Parámetros

   * searchElement
      Elemento a encontrar en el array.

   * fromIndex Opcional
      Indica el índice por el que se comienza la búsqueda. Por defecto es 0, por lo que se busca en todo el array. Si el índice es mayor o igual a la longitud del array, devuelve -1, ya que no se buscaría en el array. Si el valor es negativo, se toma restando posiciones desde el final del array. Hay que tener en cuenta que aunque el índice sea negativo, la búsqueda seguirá realizándose en un orden incremental. Si el índice calculado es menor de 0, la búsqueda se realizará por todo el array.

* Valor de retorno

   El primer índice del elemento en la matriz; -1 si no se encuentra.

##### Ejemplos

* Usando indexOf()

   El siguiente ejemplo usa indexof() para localizar valores en un array

   ```
   var array = [2, 9, 9];
   array.indexOf(2);     // 0
   array.indexOf(7);     // -1
   array.indexOf(9, 2);  // 2
   array.indexOf(2, -1); // -1
   array.indexOf(2, -3); // 0
   ```

___

### Funciones.

El objetivo principal es centralizar la lógica de un procedimiento que se requiera utilizar varias veces



## Recomendaciones:

* Para poder ejecutar un archivo en especifico se debe navegar en la terminal de comando dentro d ela carpeta donde se encuentra alojado el archivo y agregar el siguiente comando:

    ```
    node "nombre del archivo"
    ```

* Para el llamado de archivos javascript en archivos html, se recomiendo realizarlo de la siguiente manera:
    
    ```
    <script src="**nombre del archivo**"></script>
    ```

    Se reconoce como una mala practica la implementación de archivos javascript en html de la siguiente manera.

    ```
    <script type="text/javascript">   
        console.log("Hola Mundo en Html");
    </script>
    ```

  Posterior a ello, se deben colocar al final del archivo html y asi evitando que al ejecutarse el archivo se genere algun bloquee o demora en la ejecución del mismo.

* Al nombrar los archivos se debe tener en cuenta que debe ser separado los nombres con un guion (primer-aplicativo), evitando colocar espacios, caracteres especial y mayusculas, teniendo en cuenta que la gran mayoria de servidores funcionan con base a linux.




## Importante.

Quedamos iniciando el video 14 del curso JavaScript Moderno; Guía para  dominar el lenguaje; del curso de Udemy del instructor Fernando Herrera.

