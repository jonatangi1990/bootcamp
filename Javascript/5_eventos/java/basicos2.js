const buttons = document.querySelectorAll('.header button');
const buttonsFooter = document.querySelectorAll('.footer button')

//Asigno el evento click a cada uno de los botones
for(let button of buttons){
    button.addEventListener('click', (event) => {
        document.body.style.backgroundColor = event.target.id
    })
}

for(let button of buttonsFooter) {
    button.addEventListener('click', (event) => {
        document.body.style.backgroundColor = event.target.dataset.micolor;
    })
}
