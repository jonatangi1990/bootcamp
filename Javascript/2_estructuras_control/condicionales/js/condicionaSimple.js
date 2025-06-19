/**
 * 
 * Nos permiten decidir que lineas de codigo ejecutamos
 * 
 * Sintáxis
 * 
 * if (condición - valor true/false) {
 *  sentencias a ejecutar
 * }
 * 
 */

const edad = prompt('Dime tu edad');

if(isNaN(edad)){
    console.log('Debes introducir un número');
}

if (edad >= 18 && edad <= 100) {
    console.log('Eres mayor de edad. Enhorabuena');
}

/**
 * 
 * if (condicion) {
 *    sENTENCIAS A EJECUTar si condicion = true
 * } else {
 *  Sentencias a ejecutar si condicion = false
 * }
 * 
 */

const nota = prompt('Dame tu nota');

if(nota >= 5) {
    console.log('Aprobado');
} else {
    console.log('Suspenso');
}