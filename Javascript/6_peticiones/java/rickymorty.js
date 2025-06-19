/**
 * - Funcion que cargue los datos de la api
 * -Funcion que pinte un personaje
 * -Funcion que pinte todos los personajes
 * -Opcionales funcion que filtre por especie
 * -Opcional Paginado
 */
const urlRickMorty = 'https://rickandmortyapi.com/api/character/'
async function cargardatos(url){//creamos funcion para cargar los datos de la api que nos interese
    try {
        const response = await fetch(url, { method: 'GET' }); //en method ponemos el metodo que queremos lanzar y lo guardamos todo en una variable (const)
        const data = await response.json(); //pasamos la respuesta al metodo json y como devuelve una promesa ponemos antes el await y lo guardamos
        return data; //retornamos el resultado
    } catch (error) {
        console.log(error);
    } 

}

/* 
    <article>
        <figure>
            <img src="IMAGEN PERSONAJE">
        </figure>
        <h3>NOMBRE</h3>
        <ul>
            <li>Estado: STATUS</li>
            <li>Especie: SPECIES</li>
        </ul>
    </article>
*/


function pintarPersonaje(personaje){//creamos funcion para pintar personaje
    const article = document.createElement('article');
    //creo el articulo
    const figure = document.createElement('figure');
    //creo el figure
    const img = document.createElement('img');
    //creo el img
    img.src = personaje.image
    //modifico la img
    figure.append(img);
    //añado el img dentro del figure
    const h3 = document.createElement('h3');
    //creo el h3
    h3.innerText = personaje.name
    //modifico el contenido del h3
    const ul = document.createElement('ul');
    //creo un ul
    const liStatus = document.createElement('li');
    //creo un li
    liStatus.innerText = `Estado: ${personaje.status}`;
    //modifico el texto del li status
    const liSpecies = document.createElement('li');
    //creo otro li
    liSpecies.innerText = `Especie: ${personaje.species}`;
    //modifico el li species
    ul.append(liStatus, liSpecies);
    //añado los li al ul
    article.append(figure, h3, ul) 
    //añado todo dentro del article
    return article;
}

function pintarLista(lista, domEl){ //creamos una funcion para pintar una lista
    for (const personaje of lista) { //creamos un bucle for of
        domEl.append(pintarPersonaje(personaje)); //llamamos a la funcion pintarpersonaje metiendola dentro del domEl
    }
}

async function init(){ //creamos una funcion que inicialice todo
    const data = await cargardatos(urlRickMorty); //llamamos a la funcion metiendo la url que queramos y como retorna una promesa le añadimos el await y el async
    pintarLista(data.results, document.querySelector('.personajes'));
}

init();

