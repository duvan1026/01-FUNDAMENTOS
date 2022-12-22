# 01-fundamentos

Primera carpeta creada  del curso javascript de Udemy del instructor Fernando Herrera.

## Polyfill

Es un código que provee el funcionamiento de una nueva característica de JavaScript(ES6), en versiones viejas como ES5.

## Variable

Es un contenedor de información que apunta a un lugar en memoria. Dicha información puede cambiar en el futuro.

### Tipos de variables

Las variables se inicializar y declarar de 3 principales formas: 

* **let** 

   Permite manejar valores variables, sin importar su tipo de dato, es soportada por la gran mayoria de navegadores.
* **const**

   Permite manejar valores constates, sin importar el tipo de datos.
* **var**

   Permite manejar valores variables, sin importar su tipo de dato.


Existen varios tipos de variables,pero se centran en 3 principales:





## Recomendaciones:

* Para poder ejecutar un archivo en especifico se debe navegar en la terminal de comando dentro d ela carpeta donde se encuentra alojado el archivo y agregar el siguiente comando:

    **node** "nombre del archivo"

* Para el llamado de archivos javascript en archivos html, se recomiendo realizarlo de la siguiente manera:
    
    `<script src="**nombre del archivo**"></script>`

    Se reconoce como una mala practica la implementación de archivos javascript en html de la siguiente manera.

   ```
    <script type="text/javascript">   
        console.log("Hola Mundo en Html");
    </script>
    ```

  Posterior a ello, se deben colocar al final del archivo html y asi evitando que al ejecutarse el archivo se genere algun bloquee o demora en la ejecución del mismo.

