const prompt = require('prompt-sync')();


// TODO: aqui quiero que si me dice
/*

dame la tabla del 3 hasta el 30,
quiero que me imprima
3x1
3x2
3x3
...
3x30
*/

const numero      = prompt ("dame un nuermo que quieras multiplicar :");
const multiplicar = prompt ("por que nuemro quieres multiplicar :")


let a = numero * multiplicar
console.log(a)
