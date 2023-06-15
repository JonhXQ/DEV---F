function mensaje(){
    alert("Soy un botón mágico")
    var divsCuadrosSelectores = document.querySelectorAll("div.cuadro");
    divsCuadrosSelectores[0].innerHTML = "<p>Fui modificado por el botón</p>";
}

var divPrincipal = document.getElementById("divPrincipal");
console.log(divPrincipal);

var divsCuadros = document.getElementsByClassName("cuadro");
console.log(divsCuadros);

var todosLosDivs = document.getElementsByTagName("div");
console.log(todosLosDivs);

/* div#divPrincipal, div.cuadro.rojo, div.cuadro.azul */

var divsCuadrosSelectores = document.querySelectorAll("div.cuadro");
console.log(divsCuadrosSelectores);

console.log("InnerHTML");
console.log(divsCuadrosSelectores[0].innerHTML);
console.log("OuterHTML");
console.log(divsCuadrosSelectores[0].outerHTML);
