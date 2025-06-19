const sectionArticulos = document.querySelector('.articulos');
const articulos = [
    { title: 'Pescado', price: 12 },
    { title: 'Carne', price: 20 },
    { title: 'Lechuga', price: 2 },
    { title: 'Leche', price: 0.5 },
]

function pintarUnArticulo(product, section, posicion) {
    const article = document.createElement('article'); //<article></article>
    const h3 = document.createElement('h3'); //<h3></h3>
    const p = document.createElement('p'); //<p></p>
    article.classList.add('producto');
    if (posicion % 2 === 0) {
        article.classList.add('verde');
    } else {
        article.classList.add('rojo');
    }
    p.textContent = `Precio: ${product.price} €`; //<p>Precio: 12 €</p> 
    h3.textContent = product.title; //<h3>Pescado</h3> 

    article.append(h3, p); /*<article>
                                <h3>Pescado</h3> 
                                <p>Precio: 12 €</p> 
                            </article> */

    section.appendChild(article);

}

function cargarArticulos(lista, section) {
    let posicion = 0;
    for (let articulo of lista) {
        pintarUnArticulo(articulo, section, posicion)
        posicion++;
    }
    //lista.forEach( (articulo, index) => pintarUnArticulo(articulo, section, index))
}

cargarArticulos(articulos, sectionArticulos)