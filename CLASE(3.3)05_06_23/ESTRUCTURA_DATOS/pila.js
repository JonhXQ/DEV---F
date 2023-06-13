let pila = [];
pila.push(8);
pila.push(5);
pila.push(3);

console.log(pila);

pila.pop();

console.log(pila);

console.log(pila[pila.length - 1]);

class Pila{
    constructor(){
        this.arreglo = [];
    }
    push(Pila){
        this.arreglo = [];
    }
    pop(){
        return this.arreglo.pop();
    }
    peek(){
        return this.arreglo[this.arreglo.length - 1];
    }
    size(){
        return this.arreglo.length;
    }
    printWithoutModify(){
        console.log(this.arreglo);
    }
    printModify(){
        while(this.arreglo.length != 0){
            console.log(this.arreglo.pop());
        }
    }
}

let pila1 = new Pila();
pila1.push(1);
pila1.push(2);
pila1.push(3);
pila1.push(4);
pila1.push(5);

pila1.printWithoutModify();

pila1.pop();

pila1.printWithoutModify();

console.log(`Ultimo valor: ${pila1.peek()}`);

pila1.printModify();

pila1.printWithoutModify();