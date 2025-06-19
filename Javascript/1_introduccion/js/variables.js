// comentario
/**
 * comentario
 * en varias
 * lineas
 * 
 */

console.log("variables"); 
// comando shift 7 para crear un comentario de forma rapida

// 2 tipos de variables: constantes - variables

const ciudad = "Madrid";

// ciudad = "Barcelona"; //NO SE PUEDE

console.log(ciudad); //Madrid

let direccion = 'Calle Gran Vía 23'
console.log(direccion);
direccion = "Otra calle";
console.log(direccion);

// CONSTANTES

const PI = 3.14159;

// camelCase

// - Todos los nombres de variables empiezan con minúscula
// - si el nombre de la variable incluye varias palabras, las siguientes palabras empiezan con mayúscula

const nombreCompleto = "Mario Girón Martín";

// TIPOS DE DATOS

// PRIMITIVOS: string, number, boolean (verdadero o falso), undefined, null

//String
const nombre = "Roberto";
const apellidos = 'Gómez';
const citaLiteraria = 'El personaje dijo: "Hola amigos"';

console.log(nombre + apellidos);

//Template literals
const frase = `Mi nombre es ${nombre} y mi apellido es ${apellidos}`;

console.log(frase);

// NÚMEROS

const edad = 34;
const iva = 26.99;

//BOOLEAN
const esActivo = true; // false

// Undefined
let prueba; // Solo hemos definido la variable

//Null
prueba = null;

//typeof: te dice de que tipo es la variable(string,number...)

console.log(typeof nombre);
console.log(typeof edad);

// No puedo redeclarar variables
// const nombre = 'Rosita';

