// Find

const numeros = [2, 4, 7, 64, 98];

//buscar el primer numero multiplo de 3

const numeroDivisible3 = numeros.find((item) => {
    //retornamos true si item es el valor que buscamos
    //retormamos false si item no es el valor que buscamos
    return item % 3 === 0
 })

 console.log(numeroDivisible3);


 const alumnos = [
            { nombre: 'Juan Antonio', edad: 41 },
            { nombre: 'Lucia', edad: 26 },
            { nombre: 'Marta', edad: 12 },
            { nombre: 'Rodrigo', edad: 32 },
            { nombre: 'Pepe', edad: 65 },
        ]

//Encontrar el primer elemento cuya edad sea menor de 18 años

const Menor = alumnos.find((alumno) => alumno < 18);

console.log(Menor)

//FINDINDEX

const MenorIndice = alumnos.findIndex((alumno) => alumno < 18);
console.log(MenorIndice);
alumnos.splice(MenorIndice, 1);
console.log(alumnos);

// Filter
// - Recuperar un array nuevo con todos los elementos del array original que cumplan una condicion

const pares = numeros.filter((numero) => numero % 2 === 0);

console.log(pares);


// Filtrar todos los alumnos menos de edad

const menores = alumnos.filter((alumno) => alumno.edad > 18);
console.log(menores);

//MAP

// - Retorna un array con las mismas posiciones que el array original
// - Dentro de la funcion anonima retornamos el valor de cada una de las posiciones del nuevo array

// Array con todos los numeros multiplicados x2
const dobles = numeros.map((numero) => numero * 2);

//Obtener un array con el nombre de todos los alumnos

const nombres = alumnos.map(alumno => alumno.nombre);

// REDUCE

const total = numeros.reduce((acumulador, curr) => acumulador + curr, 0);

