/* Solicitar al usuario un número, y determinar
si es divisible entre dos o no. Mostrando al usuario 
un mensaje de “x número es divisible entre 2” o “x núm */

/* let Num = prompt("Ingrese número");

if (Num%2==0) {alert("El número ingresado es par")} 
else {alert("El número ingresado es impar")} */

/* Solicitar al usuario una calificación (entre 1 y 10). 
Luego se debe comprobar que el número efectivamente esté en ese rango, 
si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” 
si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” 
si es 9, y por último, “excelente” si es 10. */

let Nota = prompt("Ingrese la calificación"); 

if(Nota>=1 && Nota<=10){
    if(Nota<6){alert("Reprobado")}
    else if(Nota>=6 && Nota<=8){alert("Regular")}
    else if(Nota==9){alert("Bien")}
    else{alert("Excelente")}
}else{alert("Error")}

/* Un conocido portal de educación en tecnología está ofreciendo 
programas para aprender a desarrollar aplicaciones. Escribe un programa 
que le indique a la persona interesada cuánto deberá pagar mensualmente 
de acuerdo a la opción elegida.

El programa educativo contempla 3 diferentes niveles, cada uno con su 
costo mensual:

Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN

Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento 
correspondiente al precio final.

Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.

Finalmente, además del precio mensual con descuento, 
indicar al usuario cuánto gastaría en total por el curso elegido, 
tomando en cuenta las siguientes duraciones:

Course: 2 meses
Carrera 6 meses
Master: 12 meses */