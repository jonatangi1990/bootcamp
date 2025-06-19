//Opcionales
function saludo(nombre = 'nombre por definir'){
    console.log(`Hola ${nombre}`);
}

saludo('Roberto');
saludo();

//Multiples argumentos. Rest Parameters
function sumar(...numeros){
    let total = 0;
    for (let i = 0; i <= numeros.length -1; i++) {
        total += numeros[i];
        
    }
    return total;
}

function media(...numeros){
    let total = 0;
    for (let i = 0; i <= numeros.length -1; i++) {
        total += numeros[i];
        
    }
    return total / numeros.length;
}

console.log(sumar(1, 2, 4));


console.log(sumar(89, 32));
console.log(sumar(1, 1, 1, 1, 1, 1, 1));