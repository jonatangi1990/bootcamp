const estudiantes = [
    {
        nombre: 'Juan Antonio',
        apellidos: 'Perez Jarillo',
        edad: 42,
        foto: 'https://randomuser.me/api/portraits/men/52.jpg',
        direccion: {
            calle: 'Avenida de la Constitución 18 1D',
            cp: '08080',
            ciudad: 'Barcelona'
        }
    },
    {
        nombre: 'Marta',
        apellidos: 'Lopez Guitierrez',
        edad: 32,
        foto: 'https://randomuser.me/api/portraits/women/52.jpg',
        direccion: {
            calle: 'Calle alegria 19',
            cp: '28009',
            ciudad: 'Madrid'
        }
    },
    {
        nombre: 'Lucia',
        apellidos: 'Alvarez Lopez',
        edad: 40,
        foto: 'https://randomuser.me/api/portraits/women/51.jpg',
        direccion: {
            calle: 'Paseo de la acacias 34 3D',
            cp: '28012',
            ciudad: 'Madrid'
        }
    }
]

// estudiantes es un array
// estudiantes tiene 3 objetos

function pintarEstudiante(estudiante){
    //retorne el codigo html que representa a un unico estudiante
    return `<article>
            <figure>
                <img src="${estudiante.foto}" alt="">
            </figure>
            <h3>${estudiante.nombre} ${estudiante.apellidos}</h3>
            <p>${estudiante.direccion.calle}</p>
            </article>`
}

function pintarLista(lista){
    let html =''
    //tiene que retornar el codigo con la etiqueta section y dentro un article para cada uno de los estudiantes del array lista
    for(let est of lista){
        html += pintarEstudiante(est);
        
    }
    return `<section>${html}</section>`;
}


document.writeln(pintarLista(estudiantes));