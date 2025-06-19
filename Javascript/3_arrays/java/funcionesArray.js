const aves = ['aguila', 'paloma', 'colibri', 'cuervo'];

// PUSH - agrega elemento en la ultima posicion


aves.push('agapornis');

// pop - elimina el ultimo elemento

aves.pop();

// UNSHIFT - Agregar elemento en la primera posicion
aves.unshift('avestruz');

// SHIFT - Eliminamos el primer elemento
aves.shift();

// SPLICE - 
aves.splice(2, 2);

console.log(aves.at(1)); //devuelve la posicion 1
console.log(aves[1]); //devuelve la posicion 1

//Reverse - TOREVERSE
//reverse modifica el arr original
//torevserse le da la vuelta al arr original pero no lo modifica pudiendo crear otro arr modificado

aves.reverse();

const arrReverse = aves.toReverse();
console.log(arrReverse)

// SPLIT Y JOIN
//SPLIT es una funcion de string

const texto = 'En un lugar de la Mancha'
const palabras = texto.split(' '); // ['en', 'un', 'lugar', 'de', 'la', 'mancha']

const fraseJunta = palabras.join('-'); // en-un-lugar-de-la-mancha
