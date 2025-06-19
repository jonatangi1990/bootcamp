/**
 * Pedir un número por prompt y calcular su factorial
 * 
 * 5! -> 5 * 4 * 3 * 2 * 1 = 120
 * 
 * 
 */

const numero = Number(prompt('Dime un número'));

let resultado = 1;
for (let i = numero; i > 1; i--) {
    resultado = resultado * i;
}

console.log(resultado);

