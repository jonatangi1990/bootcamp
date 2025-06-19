const seccion = document.getElementById('principal');

//Recuperar html
console.log(seccion.innerHTML);
//Modificar Html
//seccion.innerHTML = '<button>Pulsa el boton</button>';
//Modificar el style de un elemento
seccion.style.backgroundColor = 'red';

//Recuperaion de todos los parrafos
const parrafos = document.getElementsByTagName('p');
for(let parrafo of parrafos){
    //Recuperar el contenido de texto
    console.log(parrafo.innerText);
    //Modificar el contenido de texto
    parrafo.innerText = 'otro texto';
}

//Recuperar html a partir de la clase
const parrafosPares = document.getElementsByClassName('par');

for(let parrafoPar of parrafosPares){
    parrafoPar.innerHTML = `<strong>${parrafoPar.innerHTML}</strong>`
}

// Colocar la palabra 'IMPAR' delante del texto de cada uno de los elementos con clase 'impar'

const parrafosImpares = document.getElementsByClassName('impar');

for(let parrafoImpar of parrafosImpares){
    parrafoImpar.innerText = `Impar ${parrafoImpar.innerHTML}`
    parrafoImpar.style.fontSize = '24px';
    parrafoImpar.style.color = 'rgb(128, 29, 34)';
}
