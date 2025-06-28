const prompt = require('prompt-sync')();

let dia = prompt("Dame un día de la semana: ");

const lunes     = ["7:00am - 8:40am: Lenguajes de Programación", "8:40am - 9:10am: Receso", "9:10am - 10:00am: Simulación", "10:00 - 11:40 analisis logico"];
const martes    = ["7:00am - 8:40am: Sistemas Operativos",       "8:40am - 9:10am: Receso", "9:10am - 10:00am: Simulación", "10:00 - 11:40 sistemas de bases de datos"];
const miercoles = ["7:00am - 8:40am: Lenguajes de Programación", "8:40am - 9:10am: Receso", "9:10am - 10:00am: Simulación", "10:00 - 11:40 analisis logico"];
const jueves    = ["7:00am - 8:40am: Sistemas Operativos",       "8:40am - 9:10am: Receso", "9:10am - 10:00am: Simulación", "10:00 - 11:40 sistemas de bases de datos"];

switch(dia) {
    case 'lunes':
        console.log("Horario de Lunes:");
        console.log(lunes)      
        break;
    case 'martes':
        console.log("Horario de Martes:");
        console.log(martes)
        break;
    case 'miercoles':  
        console.log("Horario de Miércoles:");
        console.log(miercoles)
        break;
    case 'jueves':
        console.log("Horario de Jueves:");
        console.log(jueves)
        break;
    default:
        console.log("El valor no es válido");
}
