// Funcion que sume 2 numeros

function sumar(numA, numB) {
    return numA + numB;
}

const resultado = sumar(3, 8);
const total = sumar(resultado, 14);

console.log(resultado, total);

// Funcion factorial
function factorial(num) {
    let resultado = 1;
    for(let i = num; i > 1; i--){
        resultado *= i
    }
    return resultado;
}


// Suma del resultado del factorial de 6 mas el factorial de 5

const fact6 = factorial(6);
const fact5 = factorial(5);
const resultadoFinal = sumar(fact6, fact5);

console.log(resultadoFinal);

//Pide al usuario 2 numeros y realiza la suma de ambos ademas del factorial de cada uno de ellos
const num1 = Number(prompt('Dime el primer numero'));
const num2 = Number(prompt('Dime el segundo numero'));

console.log('Suma' ,sumar(num1, num2));
console.log('Factorial num1', factorial(num1));
console.log('Factorial num2', factorial(num2));

/**
 * Funcion que indique si un numero es primo o no
 * Parametro el numero que queremos comprobar
 * Retorno: true si es primo. false si no es primo
 * 
 * Ejemplo:
 * 
 * esPrimo(14); // false
 * esPrimo(7); // true
 * 
 * Un numero es primo si solo es divisible por si mismo y por la unidad
 */