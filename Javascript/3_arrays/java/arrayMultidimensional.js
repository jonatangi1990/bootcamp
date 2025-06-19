const aves = ['aguila', 'colibri', 'cuervo'];
const peces = ['tiburon', 'cirujano', 'payaso', 'besugo'];
const felinos = ['pantera', 'leon', 'gato', 'ligre', 'leopardo'];

const zoo = [aves, peces, felinos];

zoo[1][1] = 'liebre';

//Cambiar peces por aves
let avesGuardar = zoo[0]
zoo[0] = zoo [1];
zoo[1] = zoo[0];


//Mostrar por consola todos los elementos del array zoo, recorriendolos de 1 en 1.
//hay que usar el for con indices

for(let i = 0; i < zoo.length; i++){
    let arr = zoo[i];
    for(let j = 0; j < zoo[i]; j++){
        console.log(zoo[i][j]);
    }
}

for(let especie of zoo){
    for(let animal of especie){
        console.log(animal);
    }
}