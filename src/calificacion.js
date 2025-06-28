const prompt = require('prompt-sync')();

const alumno        = prompt("cual es el nombre del alumno :");
const calificacion  = prompt("cual es la calificacion del alumno :");


// TODO: agregar validacion de numero.
// TODO: crear un formato de output bonito, donde incluyas el nombre


if (calificacion>=6){
    console.log("APROBADO")
}else if (calificacion<=5){
    console.log("REPROVADO")
}