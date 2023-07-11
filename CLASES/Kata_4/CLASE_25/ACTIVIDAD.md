# ACTIVIDADES

1. Muestra un mensaje en consola mediante un callback

2. Crear una función de orden superior que reciba como argumento un mensaje y callback. Según el callback que se pase como argumento, la función de orden superior debe mostrar el mensaje en un console.warn o en un console.log

3. Crear una función de orden superior que reciba como argumentos dos números y un callback. Según el callback que se pase a la función, se devuelve la suma de los dos números, la resta de los dos números o la multiplicación de los dos números.

4. Escribe una función de orden superior que reciba una cadena de caracteres y debe devolver, mediante un callback, la cadena de caracteres en mayúsculas o en minúsculas.

``` JavaScript
ordenSuperior("PejeLagarto", minus);
-> pejelagarto
ordenSuperior("PejeLagarto", mayus);
-> PEJELAGARTO
```