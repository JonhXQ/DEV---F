function ordenamientoBurbuja(arreglo){
    let nuevoArreglo = [...arreglo];

    for(let i = 0; i < nuevoArreglo.length; i++){
        for(let j = 0; j < nuevoArreglo.length - i - 1; j++){
            let aux = nuevoArreglo[j];
            nuevoArreglo[j] = nuevoArreglo[j + 1];
            nuevoArreglo[j + 1] = aux;
        }
    }
    return nuevoArreglo;
}

function generarAleatorios(n, numeroMaximo){
    return Array.from({ length: n }, () => Math.floor(Math.random()*numeroMaximo));
}

let arregloBurbuja = generarAleatorios(100, 100);
let arregloBurbujaOrdenado = ordenamientoBurbuja(arregloBurbuja);

console.log(`Arreglo sin ordenar: `);
console.log(arregloBurbuja);

console.log(`Arreglo ordenado: `);
console.log(arregloBurbujaOrdenado);