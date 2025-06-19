const sectionPrincipal = document.querySelector('#principal');

const parrafo = document.createElement('p');

parrafo.if = 'primer';
parrafo.classList.add('parrafo');
parrafo.innerText = 'Este es el texto';

sectionPrincipal.append(parrafo);