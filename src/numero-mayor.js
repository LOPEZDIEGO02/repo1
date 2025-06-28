const prompt = require('prompt-sync')();


// TODO: sanitizar los numeros

function mayor (){
    
    console.log("vamos a comparar los numeros")

    const a = prompt("dame un numero:");
    const b = prompt("dame otro numero para comparar :")

    if (a>b) {
        console.log("este numero es mayor : " +a)        
    }else if (a<b){
        console.log("este numero es mayor : " + b)
    }else{
        console.log("los dos son iguales")
    }
}

mayor()