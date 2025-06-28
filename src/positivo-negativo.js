const prompt = require('prompt-sync')();


const numero = prompt ("puedes darme un numero que sea negativo o positivo :")
// TODO: sanitizar el string

if (numero<=0){
    console.log("el numero es negativo")
}else {
    console.log("el numero es positivo")
}