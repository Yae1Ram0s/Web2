let numero1 = prompt("Ingrese un número 1: ");
let numero2 = prompt("Ingrese un número 2: ");

function suma(n1, n2) {
    return parseInt(n1) + parseInt(n2);
}

function resta(n1, n2) {
    return parseInt(n1) - parseInt(n2);
}

function multiplicacion(n1, n2) {
    return parseInt(n1) * parseInt(n2);
}

function division(n1, n2) {
    return parseInt(n1) / parseInt(n2);
}

let resultadoSuma = suma(numero1, numero2);
let resultadoResta = resta(numero1, numero2);
let resultadoMultiplicacion = multiplicacion(numero1, numero2);
let resultadoDivision = division(numero1, numero2);

console.log(`La suma es: ${resultadoSuma}`);
console.log(`La resta es: ${resultadoResta}`);
console.log(`La multiplicación es: ${resultadoMultiplicacion}`);
console.log(`La división es: ${resultadoDivision}`);


