/**
 * 
 *- Usamos un ternario si queremos asignar valor a una variable en funcion de una condicion.
 */

 const nota = prompt('Dime tu nota');

/* let mensaje;
 if(nota >= 5){
    mensaje = 'aprobado'
} else {
    mensaje = 'suspenso'
}*/

const mensaje = (nota >= 5) ? 'Aprobado' : 'Suspenso'

const numero = prompt('Dime un número');
const resultado = (numero % 2 === 0) ? 'Par' : 'Impar' ;
console.log(resultado);