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

   Permite manejar valores variables, sin importar su tipo de dato, es soportada por la gran mayoria de navegadores.
* **const**


   Permite manejar valores constates, sin importar el tipo de datos,las constantes no tienen propiedades para esteblecer o cambiar el valor, lo cual las hace mas ligera que otro tipo de variable como lo son let o var.
* **var**(No es una buena practica)

   Permite manejar valores variables, sin importar su tipo de dato, al utilizarlo, el dato almacenando se guarda en un objeto global llamado window, lo cual es un problema porque permite reemplazar propiedades y objetos propios del mismo.

Existen varios tipos de variables,pero se centran en 3 principales:


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





## Recomendaciones:

* Para poder ejecutar un archivo en especifico se debe navegar en la terminal de comando dentro d ela carpeta donde se encuentra alojado el archivo y agregar el siguiente comando:

    **node** "nombre del archivo"

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




  ### Importante.

  Quedamos iniciando el video 14 del curso JavaScript Moderno; Guía para  dominar el lenguaje; del curso de Udemy del instructor Fernando Herrera.

