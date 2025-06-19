/**
 * Pedir por prompt cuantos cuadrados queremos pintar
 * Dentro del cuadrado aparecera el numero de posicion que ocupa
 * Los cuadrados pares seran de un color y los impares de otro color
 * 
 * 1- Pintar un unico cuadrado
 * 2- Pintar N cuadrados
 * 3- Cambiar el color dependiendo del orden
 */

const numero = prompt('Cuántos cuadrados quieres');
/**
for (let i = 0; i < numero; i++){
    if (i % 2 === 0) {
        document.writeln('<div class="cuadrado par"></div>');
    } else{
        document.writeln('<div class="cuadrado impar"></div>');
    }

 
}
 */
for (let i = 0; i < numero; i++){
    const clase = (i % 2 === 0) ? 'par' : 'impar';
        document.writeln(`<div class="cuadrado ${clase}">${i + 1}</div>`);
    } 


/**
 * if-else
 * ternario
 */