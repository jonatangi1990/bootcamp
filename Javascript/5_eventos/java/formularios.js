const inputNombre = document.querySelector('#inputNombre');
const nombre = document.querySelector('#nombre');

// change - input
inputNombre.addEventListener('input', (event) => {
    nombre.innerText = event.target.value;
} );

// focus - blur
inputNombre.addEventListener('focus', (event) => {
    nombre.innerText = 'Ya puedes escribir'
})

// focus - blur
inputNombre.addEventListener('blur', (event) => {
    nombre.innerText = 'Tienes que tener el foco'
})

/**
 * 1-Recuperar el formulario en una variable del js
 * 2-Asignar el evento 'submit' al formulario
 * 3-Dentro del evento colocar un console.log a ver si sale
 */

const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log(event.target.nombre.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
});