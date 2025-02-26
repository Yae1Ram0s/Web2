let numeroMaquina = Math.floor(Math.random()*(10-1)+1);
console.log(numeroMaquina);
let numeroUser = prompt("Ingresa un numero del 1 al 10: ");


let vidas = 5
while(numeroMaquina !== numeroUser){
    vidas--;
    numeroUser = prompt("El numero no es correcto. Te quedan: " + vidas);
}

if( numeroMaquina = numeroUser){
    console.log("Ganaste")
}else{
    console.log("Perdiste y el numero era: "+ numeroMaquina)
}