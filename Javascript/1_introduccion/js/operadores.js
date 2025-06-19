// Operadores aritmétricos
// + - / * %

const numA = 34;
const numB = 29;

console.log('Suma', numA + numB);
console.log('Resta', numA - numB);
console.log('Multiplicacion', numA * numB);
console.log('Division', numA / numB);

console.log('Resto', numA % numB);

//

let precio = "120";
precio = parseInt(precio);  // parseFloat(si fuese un numero decimal)
const iva = 12;

const total = precio + iva;
console.log(total);

//

let edad = 'Treinta y cinco';
edad = parseInt(edad); //NaN - Not a Number
console.log(edad);

// Operadores de comparación

const num1 = 25;
const num2 = 32;
const num3 = '25';

console.log('iguales', num1 === num2);
console.log('iguales', num1 === num3);
console.log('iguales', num1 == num3);

console.log('mayor', num1 > num2);
console.log('menos', num1 < num2);
console.log('mayor igual', num1 >= num2);
console.log('menor igual', num1 <= num2);

console.log('diferente', num1 !== num2);

// OPERADORES LOGICOS
// AND - && OR - ||

console.log(num1 === num2 || num1 > num2); // false

// 

const ciudad = 'valencia';

let ciudadUsuario = prompt('Dame el nombre de una ciudad');
ciudadUsuario = ciudadUsuario.toLowerCase(). trim;  // para convertir en minusculas y quite los espacios en blanco
console.log('¿Has acertado?', ciudad === ciudadUsuario);

/**
 * Pedir un número al usuario de segundos
 * Calcular la cantidad de horas,minutos y segundos
 */


