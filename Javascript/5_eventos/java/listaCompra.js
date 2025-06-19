/* 
PRODUCTO -> { nombre: 'Pescado', cantidad: 12 }
- Todos los productos estarán situados en un ARRAY llamado productos
- Funciones:
    - guardarProducto -> Recoge los valores del formulario y crea el producto dentro del array
    - pintarProducto -> Pinta el HTML correspondiente a un único producto

    <li>
        NOMBRE PROD x CANTIDAD 
        <button>Borrar</button>
    </li>

    - pintarLista -> Recorre el array de productos y los pinta todos
*/

//Recuperar los elementos html necesarios

const form = document.querySelector('form');
const listado = document.querySelector('#listado');

const productos = [];


//EVENTOS
form.addEventListener('submit', guardarProducto);


//FUNCIONES
function guardarProducto(event){
    event.preventDefault();
    
    const nombre = event.target.nombre.value;
    const cantidad = event.target.cantidad.value;

    const nuevoProducto = {
        nombre: nombre,
        cantidad: cantidad,
    }

    productos.push(nuevoProducto);

    //Pintar el nuevo producto

    const li = pintarProducto(nuevoProducto);
    listado.append(li);

    event.target.reset();
}

function pintarProducto(producto){
    const li = document.createElement('li');
    li.innerText = `${producto.nombre} x ${producto.cantidad}`;
    li.classList.add('list-group-item');
    //<li>Pan x 23</li>
    const button = document.createElement('button');
    button.innerText = 'Borrar';
    button.classList.add('btn', 'btn-danger');
    button.addEventListener('click', (event) => {
        event.target.parentNode.remove()
        // li.remove();
    })

    li.append(button);

    return li;
}