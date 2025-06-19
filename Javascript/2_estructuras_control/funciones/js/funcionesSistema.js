// STRING

const texto = 'En un lugar de la mancha';

const textoMinus = texto.toLowerCase();
const textoMayus = texto.toUpperCase();

console.log(textoMayus, textoMinus);

const textoNuevo = texto.repeat('a', 'HOLA');

const textoSinEspacios = texto.replaceAll(' ', '').toLowerCase();
console.log(textoSinEspacios);

console.log(texto.at(7));
console.log(texto.length);

for(let i = 0; i< texto.length - 1; i++){
    console.log(texto.at(i));
}

//Number

console.log(Math.pi);
console.log(Math.sqrt(256));

const numero = 3.3981;

console.log(Math.round(numero));//redondea
console.log(Math.ceil(numero)); //redondea hacia arriba
console.log(Math.floor(numero)); //redondea hacia abajo
console.log(Math.trunc(numero)); //se queda con la parte entera

//numeros aleatorios

const randomNum = Math.random(); // devuelve un numero entre 0 y 0.99999999

Math.random() * 100;

console.log(Math.ceil(Math.random() *100));

