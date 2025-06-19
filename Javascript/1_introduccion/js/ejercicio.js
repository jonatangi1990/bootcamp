/**
 * 
 * <div style="background-color: red; widht: xxx, height: xxx;"></div>
 * 
 */

const color = prompt('Dime un color');
const ancho = prompt('Dame un ancho');
const alto = prompt('Dame un alto');

document.writeln(`<div style="background-color: ${color}; widht: ${ancho}px; height: ${alto}px;"></div>`);