function createArticle(item){
    const article = document.createElement('article');
    article.classList.add('producto');

    const h3 = document.createElement('h3');
    h3.innerText = item.title;

    const span = document.createElement('span');
    span.innerText = item.price + '€';
    if(item.oferta){
        span.classList.add('oferta');
    }

    const p = document.createElement('p');
    p.innerText = 'Precio: ';
    p.append(span);


    article.append(h3, p);


    return article;
}

function fillList(list, domEl){
    for(let item of list) {
        const article = createArticle(item);
        domEl.append(article);
    }
}
const section = document.querySelector('.listado');
fillList(productos, section);