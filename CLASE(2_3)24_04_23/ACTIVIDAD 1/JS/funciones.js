/* --------------------------------------------------------------------------
1. Hacer una función que convierta de grados centígrados a Fahrenheit 

Grados Centígrados = (grados Fahrenheit - 32) * 5/9
Grados Fahrenheit = (grados Centígrados * 5/9) + 32
-------------------------------------------------------------------------- */

/* let temperatura = prompt("Ingrese la temperatura en grados centígrados")
function convertirGradosAFahrenheit(temperatura){
    return (temperatura*5/9)+32;
}
alert(temperatura + "°C es equivalente a " + convertirGradosAFahrenheit(temperatura) + "°F") */

/* --------------------------------------------------------------------------
2. Función que pida N parámetros y devuelva cuantos parámetros se le pasaron
-------------------------------------------------------------------------- */

/* function cuantosParametros(){
    return "Esta función recibió " + arguments.length + " argumentos"
}
let resultado = cuantosParametros(1,2,3,4,5,6,7,8,9,10);
alert(resultado) */

/* --------------------------------------------------------------------------
3. Hacer una función que calcule el tiempo necesario para que un automóvil
que se mueve con una velocidad de 73000 m/h recorra una distancia de 120 km

(Tiempo = d/v)
-------------------------------------------------------------------------- */

/* let velocidad = 73000
let distancia = 120

function calcularTiempo(velocidad,distancia){
    return "El tiempo requerido es: " + Math.round(distancia/(velocidad/1000)) + " horas"
}

alert(calcularTiempo(velocidad,distancia)) */