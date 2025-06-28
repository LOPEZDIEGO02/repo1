const prompt = require('prompt-sync')();


let dia = prompt ("dame un dia de la semana: ")

const luenes    = ["lenguaje de programacion", "simulacion", "analisis logico"]
const martes    = ["sistemas operativos",      "simulacion", "sistemas de bases de datos"]
const miercoles = ["lenguaje de programacion", "simulacion", "analisis logico"]
const jueves    = ["sistemas operativos",      "simulacion", "sistemas de bases de datos"]

// TODO: sanitizar el string -> pasarlo de mayusculas a minusculas

// TODO: terminarlo
switch(dia) {
    case 'lunes':
        console.log('mi horario es', luenes)
        break;
    case 'martes':
        console.log('mi horario es:', martes)
        break;
    default:
        console.log(' no tengo horario de ese dia')
}
