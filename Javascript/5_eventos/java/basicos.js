const button = document.querySelector('#btnPrincipal');
const button2 = document.querySelector('#segundoBoton');
const button3 = document.querySelector('#tercerBoton');
const lis = document.querySelectorAll('ul li');

// No reutilizo la funcion
button.addEventListener('click', (event) => {
    console.log('Has pulsado el boton');
    console.log(event.target);
    event.target.style.backgroundColor = 'lightblue'
})

// Si reutilizo la funcion
function manejarClick(event){
    console.log('Esta es la otra funcion')
    console.log(event.target)
    event.target.style.color = 'red';
}

button2.addEventListener('click', manejarClick);
button3.addEventListener('click', manejarClick);

// Agregar un evento click a cada uno de los lis
for(let li of lis){
    li.addEventListener('click', (event) => {
        event.target.style.backgroundColor = 'green'
    })
}