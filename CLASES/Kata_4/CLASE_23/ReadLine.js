const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa tu nombre: ', (nombre) => {
    console.log(`Hola, ${nombre}!`);
    rl.close();
});

/* console.log("cual es tu nombre?")
const stdin = process.openStdin()
stdin.addListener("data", (data) => {
    console.log("Tu nombre es: " + data.toString());
    process.exit();
}) */

