const caja = document.querySelector('.caja');

// mouseenter
caja.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = 'red';
})

// mouseleave

caja.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = '';
})

// mousemove
caja.addEventListener('mousemove', (event) => {
    event.target.style.backgroundColor = `rgb(123, ${event.x}, ${event.y})`
})

// keydown
let marginLeft = 0;
let marginTop = 0;
document.body.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        marginLeft += 30;
        caja.style.marginLeft = `${marginLeft}px`;
    } else if (event.key === 'ArrowLeft') {
        marginLeft -= 30;
        caja.style.marginLeft = `${marginLeft}px`;
    } if (event.key === 'ArrowDown') {
        marginTop += 30;
        caja.style.marginTop = `${marginTop}px`;
    } if (event.key === 'ArrowUp') {
        marginTop -= 30;
        caja.style.marginTop = `${marginTop}px`;
    }
});