class Animal{
    constructor(tamaño,numeroPatas,especie,peso,tienePelo){
        this.tamaño = tamaño;
        this.numeroPatas = numeroPatas;
        this.especie = especie;
        this.peso = peso;
        this.tienePelo = tienePelo;
    }
}

let perro = new Animal("20cm",4,"perro",3,true);

console.log(`Este animal es un ${perro.especie}`);