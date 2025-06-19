const enlaces = document.querySelectorAll('#menu li a');
enlaces[0].href = 'http://20minutos.es';
enlaces[0].title = '20 Minutos';
enlaces[0].target = '_blank';
enlaces[0].innerText = '20 Minutos';

//Modificacion imagen
const imagen = document.querySelector('figure img');
const caption = document.querySelector('figure figcaption');

const imagenes = [
    { path: './images/g-architecture.jpg', title: 'Architecture' },
    { path: './images/g-minimalismo.jpg', title: 'Minimalismo' },
    { path: './images/g-salad.jpg', title: 'Salad' },
    { path: './images/g-shutterbug.jpg', title: 'Shutterbug' },
    { path: './images/g-skaterboy.jpg', title: 'SkaterBoy' },
    { path: './images/g-yellowwall.jpg', title: 'Yellow Wall' }
];

let cont = 0
setInterval(() => {
    cont++;
    imagen.src = imagenes[cont].path;
    caption.innerText = imagenes[cont].title;
    if (cont === imagenes.length -1){
        cont = -1 
    }
    
}, 3000);