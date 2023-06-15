function mensaje() {
    //alert("¡Hola, soy un botón mágico!");
    var divsCuadrosSelectores = document.querySelectorAll("div.cuadro");
    //divsCuadrosSelectores[0].innerHTML = "<p>Fui modificado por el botón</p>"

    var nuevoParrafo1 = document.createElement("p");
    var texto = document.createTextNode("Texto nuevo");
    nuevoParrafo1.appendChild(texto);
    divsCuadrosSelectores[0].appendChild(nuevoParrafo1);

    var imagenPerrito = document.getElementById("imagenPerrito");
    imagenPerrito.setAttribute("src", "images/gatito.jpg");

    /*
    var nuevoParrafo = document.createTextNode("Texto creado");
    divsCuadrosSelectores[0].appendChild(nuevoParrafo);
    */

}

function borrarElemento(){
    var imagenPerrito = document.getElementById("imagenPerrito");
    var padreDeImagen = imagenPerrito.parentNode;
    padreDeImagen.removeChild(imagenPerrito);
}

var divPrincipal = document.getElementById("divPrincipal");
console.log(divPrincipal);

var divsCuadros = document.getElementsByClassName("cuadro");
console.log(divsCuadros);

var todosLosDivs = document.getElementsByTagName("div");
console.log(todosLosDivs);

//div#divPrincipal, div.cuadro.rojo, div.cuadro.azul

var divsCuadrosSelectores = document.querySelectorAll("div.cuadro");
console.log(divsCuadrosSelectores);

console.log("InnerHTML");
console.log(divsCuadrosSelectores[0].innerHTML);
console.log("OuterHTML");
console.log(divsCuadrosSelectores[0].outerHTML);



