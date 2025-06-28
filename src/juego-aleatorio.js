const prompt = require('prompt-sync')();


const numeroCompu = Math.floor(Math.random() * 10) + 1;

let numeroUsuario;

do {
    numeroUsuario = Number(prompt("Adivina el número (1 al 10): "));

    if (numeroUsuario === numeroCompu) {
        console.log("¡Ganaste!");
    } else {
        console.log("Sigue intentando...");
    }

} while (numeroUsuario !== numeroCompu);
