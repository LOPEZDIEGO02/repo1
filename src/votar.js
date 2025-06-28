const prompt = require('prompt-sync')();


const nombre = prompt ("cual es tu nombre :");
const edad   = prompt ("dime cuantos anios tienes :");


if (edad < 18) {
    console.log("no puedes votar eres menos de edad");
    
}else  {
    console.log("eres mayor de edad puedes votar")
}