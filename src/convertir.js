const prompt = require('prompt-sync')();

const grados = prompt("pon algun grado celsiu ");

if (isNaN(grados)) {
    console.log("Verifica que sea grados celsius");
} else {
    const fahrenheit = (grados * 9/5) + 32;
    console.log(`${grados}°C equivalen a ${fahrenheit}°F`);
}
