<h1 align="center"><strong>Lunes 14 de agosto del 2023</strong></h1>

## NOTAS
Se va a trabajar con React que trabaja con un DOOM virtual

### PROCEDIMIENTO
1. Ubicarnos en el directorio donde se hospedara el servidor junto con la app web
2. Para instalar Vite empleando React directamente en la terminal:
    ```
    npm init vite@latest [nombreProyecto] -- --template react 
    ```
3. Para arrancar el servidor introducimos en la terminal:
    ```
    npm cd [nombreProyecto]
    ```
    ```
    npm install
    ```
    ```
    npm run dev
    ```
4. Se instala una extensión para facilitar la sintaxis de React:
    ```
    https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
    ```
    Para generar una sintaxis básica para un componente usamos:
    ```
    rfce
    ```
    Esto auto completa lo siguiente:
    ```JavaScript
    import React from 'react'

    function [NombreComponente]() {
        return (
            <div>[NombreComponente]</div>
        )
    }

    export default [NombreComponente]
    ```
5.- Par que nos muestre los errores de sintaxis instalamos StandardJS en el proyecto:
    ```
    https://standardjs.com/ 
    ```
6.- Ubicado en el directorio del proyecto instalamos desde terminal:
    ```
    npm install standard --save-dev
    ```
<a href="https://youtu.be/x0P6TyUc-Us?t=1"><img src="/CLASES/Kata_5/KATA_5.png"></a>