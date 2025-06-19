function sumar(num1, num2){
    return num1 + num2;
}

//Funcion anonima
const suma2 = function (num1, num2){
    return num1 + num2;
}

//Arrow Funtions
const sumar3 = (num1, num2) =>{
    return num1 + num2;
}

const sumar4 = (num1, num2) => num1 + num2;

//setTimeout

setTimeout(function(){
    console.log('Se lanza pasados 3 segundos');
}, 3000);


let cont = 0
setInterval(()=>{
    console.log('Cada segundo' + cont);
    cont++;
}, 1000);