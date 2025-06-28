const prompt = require('prompt-sync')();

const alumno        = prompt("Cuál es el nombre del alumno: ");
const calificacion  = prompt("Cuál es la calificación del alumno: ");

if (isNaN(calificacion)) {
    console.log("que crees tiene que ser numero");
} else if (calificacion >= 6) {
        console.log("Muy bien aprobaste");
    } else {
    console.log("ni modo reprobaste");
}
