/*
Elige un gato de la lista de gatos ficticios de Wikipedia:
https://en.wikipedia.org/wiki/List_of_fictional_felines
Crea un objeto llamado myCat que contenga las propiedades que representen 
la información listada en cada columna en esa página de Wikipedia. 
Es decir, el objeto debe contener character, earliest_appearance y notes.
*/


const myCat = {
  //Propiedad y valor
    character: 'Cheshire Cat',
    earliest_appearance: 'Alices Adventures in Wonderland',
    notes: 'Sometimes raises philosophical points that annoy or baffle Alice. It does, however, appear to cheer her up when it turns up suddenly at the Queen of Hearts'
}​
/*
Imprime el contenido de la propiedad character en consola 
como parte de un mensaje de bienvenida. El mensaje en consola debe 
lucir similar a esto:
Hola, soy un gato ficticio. Mejor conocido como {{character}}. Aparecí por primera vez en {{earliest_appearance}}.  
*/

console.log("Hola, soy un gato ficticio. Mejor conocido como " + myCat.character + ". Apareció por primera vez en " + myCat.earliest_appearance + "." )

/*
    Mediante una nueva línea de código, es decir sin modificar el código escrito en los puntos anteriores, añade al objeto myCat una nueva propiedad canSmile y asignarlo a true.
*/
// Antes de agregar la propiedad canSmile, aca no debería de existir
console.log(myCat.canSmile)
myCat.canSmile = true
// Después de agregar la propiedad canSmile, aca debería de existir
console.log(myCat.canSmile)

/*  
Sin modificar el código previo, añade un método al objeto myCat llamado sayHello que al ejecutarse imprima en consola el mismo mensaje del inciso 1.2), pero esta vez emplea la palabra reservada this para mostrar el nombre del gato ficticio y donde apareció por primera vez.
*/


myCat.sayHello = function (){
    console.log("Hola, soy un gato ficticio. Mejor conocido como " + this.character + ". Apareció por primera vez en " + this.earliest_appearance + "." )
}

myCat.sayHello()

/*
Sin modificar el código previo, cambia el valor de la propiedad character para que el gato ficticio tenga otro nombre. Manda a llamar el método sayHello para verificar que el cambio de nombre se ha aplicado correctamente.
*/

myCat.character = 'Gato con botas'
myCat.sayHello()

/*
Agrega una nueva propiedad llamada canFly y un nuevo método llamado fly para el objeto myCat.  Al ejecutar el método fly se debe imprimir en consola el mensaje ¡Puedo volar! si myCat tiene la propiedad canFly en true. Si canFly está asignado a false, debe mostrarse el mensaje No puedo volar....
*/

myCat.canFly = true

myCat.fly = function () {
    if(this.canFly === true){
        console.log("¡Puedo volar!")
    } else if (this.canFly === false){
        console.log("No puedo volar...")
    } else {
        console.log("Algo extraño ocurrió...")
    }
}
​
myCat.fly()