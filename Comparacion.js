var dato1 = prompt("Ingresa Número 1: ");
var dato2 = prompt("Ingresa Número 2: ");
var dato3 = ("Ingresa Número 3: ");


if ( dato1 > dato2 && dato1 > dato3) {
    console.log("Ingresa números válidos.");
} else {
    if (dato1 > dato2 && dato1 > dato3) {
        console.log("El número mayor es: " + dato1);
    } else if (dato2 > dato1 && dato2 > dato3) {
        console.log("El número mayor es: " + dato2);
    } else if (dato3 > dato1 && dato3 > dato2) {
        console.log("El número mayor es: " + dato3);
    } else {
        console.log("Al menos dos números son iguales.");
    }
}
