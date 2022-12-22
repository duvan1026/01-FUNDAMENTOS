# 01-fundamentos

Primera carpeta creada  del curso javascript de Udemy del instructor Fernando Herrera.

Para poder ejecutar un archivo en especifico se debe navegar en la terminal de comando dentro d ela carpeta donde se encuentra alojado el archivo y agregar el siguiente comando:

* **node** "nombre del archivo"

## Recomendaciones:

* Para el llamado de archivos javascript en archivos html, se recomiendo realizarlo de la siguiente manera:
    
    `<script src="**nombre del archivo**"></script>`

    Se reconoce como una mala practica la implementación de archivos javascript en html de la siguiente manera.

    `<script type="text/javascript">`
       `console.log("Hola Mundo en Html");`
    `</script>`

  Posterior a ello, se deben colocar al final del archivo html y asi evitando que al ejecutarse el archivo se genere algun bloquee o demora en la ejecución del mismo.

