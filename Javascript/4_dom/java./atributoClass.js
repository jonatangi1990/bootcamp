const button = document.querySelector('button.btn');

function quitarRojo(){
    button.classList.remove('rojo');
}
function ponerVerde(){
    button.classList.add('verde')
}
function toggleVerde(){
    button.classList.toggle('verde');
}