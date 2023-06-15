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
2. Hacer una función que muestre la tabla de multiplicar de un número
-------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------
3. Función que pida N parámetros y devuelva cuantos parámetros se le pasaron
-------------------------------------------------------------------------- */

/* function cuantosParametros(){
    return "Esta función recibió " + arguments.length + " argumentos"
}
let resultado = cuantosParametros(1,2,3,4,5,6,7,8,9,10);
alert(resultado) */

/* --------------------------------------------------------------------------
4. Hacer una función que calcule el tiempo necesario para que un automóvil
que se mueve con una velocidad de 73000 m/h recorra una distancia de 120 km

(Tiempo = d/v)
-------------------------------------------------------------------------- */

/* let velocidad = 73000
let distancia = 120

function calcularTiempo(velocidad,distancia){
    return "El tiempo requerido es: " + Math.round(distancia/(velocidad/1000)) + " horas"
}

alert(calcularTiempo(velocidad,distancia)) */

/* --------------------------------------------------------------------------
5. Leer el nombre y sueldo de 8 empleados y mostrar 
el nombre y sueldo del empleado que más gana
-------------------------------------------------------------------------- */

/* ---------------------------------------------------------------------------------
6. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. 
Mostrar en consola el resultado del array.
--------------------------------------------------------------------------------- */

/* let numeros = []; 
for (let i = 0; i < 10; i ++){
    numeros.push(Math.floor(Math.random()*100));
}
console.log(numeros) */

/* ---------------------------------------------------------------------------------
7. El usuario deberá ingresar un string con varias palabras separadas por coma 
en un popup y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y 
se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.
--------------------------------------------------------------------------------- */

/* let string = prompt("Ingresa un string");
console.log(string.split(",")) */

/* ---------------------------------------------------------------------------------
8. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado 
de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los 
métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.
--------------------------------------------------------------------------------- */

l/* et array = [10,40,30,20,15,5];
console.log(array.sort(function(a,b){return a-b})) 
console.log("Número mayor: " + Math.max(...array))
console.log("Número menor: " + Math.min(...array)) */