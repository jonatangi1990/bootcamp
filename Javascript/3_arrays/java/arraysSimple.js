//Creacion de arrays
const frutas = [];
const animales = new Array();

const aves = ['aguila', 'paloma', 'colibri', 'cuervo'];
const numeros = [12, 87, 98, 43, 65];
const cosas = ['www.google.es', 29, true]; //NO

//Longitud de un array

console.log(aves.length);

//Recuperar valores

console.log(numeros[3]); //43

//Modificar valores
aves[2] = 'buitre';
aves[aves.length] = 'gorrion';

function pintarArray(arr){
    for(let i = 0; i < arr.length; i++){
        document.writeln(`<p>${arr[i]}</p>`)
    }
}

//for-of
for(let ave of aves){
    console.log(ave);
}

//funcion que suma todos los elementos de un array

function sumaArr(arr){
    let total = 0;
    for(let item of arr){
        total += item;
    }
    return total;
}

