/**
 * Promise -> accion asincrona que se va a resolver en el futuro
 *      - Se resuelven de manera positiva o de manera negativa
 */
function cargarUsuarios(){
        // GET https://peticiones.online/api/users
    fetch('https://peticiones.online/api/users', {method: 'GET'})
    .then((response)=>{
        //Acciones a llevar a cabo si la promesa se resuelve bien
        //JSON
        response.json().then((data)=> console.log(data));
    })
    .catch((error)=>{
        //Acciones a llevar a cabo si la promesa se resuelve mal
        console.log(error);
    });
}

async function cargarUsuarios2() {
   try {
     const response = await fetch('https://peticiones.online/api/users', {method: 'GET'});
     const data = await response.json();
     return data;
   } catch (error) {
        console.log(error);
   }
}

/* 
    Gestión promesas con async-await

    1- Delante del método que retorna la promesa colocamos el modificador await
    2- Colocamos el modificador async en el ámbito de función donde se obtenga la promesa
    3- El resultado positivo de la promesa lo recuperamos en una variable previa a la ejecución
*/

// pintar un usuario y pintar lista
/**
 * 
 usuario -> _id, email, first_name, id, image, last_name, password, username

 <article>
    <h3>FIRST_NAME LAST_NAME</h3>
    <figure>
        <img src="IMAGE" />
    </figure>
    <p>Email: EMAIL</p>
 </article>
*/


function pintarUsuario(usuario){
    const article = document.createElement('article'); 
    //creamos el articulo
    const h3 = document.createElement('h3');
    //creamos el h3
    h3.innerText = `${usuario.first_name} ${usuario.last_name}`;
    //añadimos el texto al h3
    const figure = document.createElement('figure');
    //creamos el figure
    const img = document.createElement('img');
    //creamos el img
    img.src = usuario.image
    //modificamos la propiedad src del objeto img que acabamos de crear
    figure.append(img);
    //añadimos el img dentro del figure
    const p = document.createElement('p');
    //creamos el parrafo
    p.innerText = `Email: ${usuario.email}`;
    //modificamos el texto del parrafo
    article.append(h3, figure, p);
    //añadimos todo dentro del article
    return article;

}

function pintarLista(lista, domEl){
    for (const usuario of lista) { //creamos un bucle for-of para que nos pinte un usuario con la funcion que creamos anteriormente

        const article = pintarUsuario(usuario);
        domEl.append(article); //sobre el elemento del dom agregamos el article
    }
}

async function init(){ //creamos una funcion que realice lo que queremos(unimos funciones)
    const data = await cargarUsuarios2();// como retorna una promesa tenemos que añadir el await y el async
    pintarLista(data.results, document.body); //pintamos los usuarios
}
init();