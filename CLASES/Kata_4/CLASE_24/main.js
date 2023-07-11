const { PI, calcularAreaCirculo } = require('./misModulos/Modulo_A');
const constantesFisicas1 = require('./misModulos/constantesFisicas');
const { funcionesGeometricas } = require('./misModulos/areasFiguras');

let areaDeCirculo = calcularAreaCirculo(5);
console.log(`El área de mi circulo es: ${areaDeCirculo}`);
console.log(`El valor de PI es: ${PI}`);
console.log(`El valor de la gravedad es: ${constantesFisicas1.GRAVEDAD} m/s^2`);
console.log(`El valor de la variable importada es: ${funcionesGeometricas.miVariable}`)