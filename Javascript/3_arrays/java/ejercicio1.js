/**
 * funcion que reciba una frase y devuelva la misma frase pero con las palabras al reves
 * 
 * hola amiguitos del alma
 * alma del amiguitos hola
 */

function textReverse(text){
    //split, reverse, join
    const palabras = text.split(' ');
    palabras.reverse();
    const finalText = palabras.join(' ');
    return finalText;
}

const res = textReverse('con cien cañones por banda');
console.log(res);

function textReverseV2(text) {
    return text.split(' ').reverse().join(' ');
}