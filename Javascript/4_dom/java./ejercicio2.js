const listadoAlumnos = [
    { nombre: 'Ana', apellidos: 'Garcia Rodriguez', edad: 25, nota: 8 },
    { nombre: 'Juan', apellidos: 'Lopez Sanchez', edad: 30, nota: 9 },
    { nombre: 'Maria', apellidos: 'Perez Molina', edad: 28, nota: 4 },
    { nombre: 'Pedro', apellidos: 'Garcia Sanchez', edad: 32, nota: 7 },
    { nombre: 'Sofia', apellidos: 'Hernandez Martinez', edad: 26, nota: 5 },
    { nombre: 'Luis', apellidos: 'Fernandez Diaz', edad: 29, nota: 6 },
    { nombre: 'Maria', apellidos: 'Sanchez Gomez', edad: 27, nota: 3 },
    { nombre: 'Jose', apellidos: 'Gomez Sanchez', edad: 31, nota: 2 },
    { nombre: 'Maria', apellidos: 'Rodriguez Diaz', edad: 24, nota: 10 },
    { nombre: 'Juan', apellidos: 'Perez Gomez', edad: 33, nota: 1 }
]

/**
 * <article>
 *      <h3>NOMBRE APELLIDOS</h3>
 *      <ul>
 *          <li>Edad: EDAD</li>
 *          <li>Nota: Nota</li>
 *      </ul>
 * </article>
 */

/*
- Pintar todos los lumnos en una seccion del html
   - pintar alumno y pintar lista
- Asignar un color al nombre del alumno en funcion de la nota
    - <= 3 rojo   naranja 3 < 5   verde >= 5
-
*/

function getColorByNota(nota){
    if(nota <= 3){
        return 'red';
    } else if (nota > 3 && nota < 5) {
        return 'orange';
    } else if (nota >= 5){
        return 'green';
    }
}

function pintarAlumno(alumno){
    const article = document.createElement('article');

    const h3 = document.createElement('h3');
    h3.innerText = alumno.nombre + ' ' + alumno.apellidos;
    h3.style.color = getColorByNota(alumno.nota);

    const ul = document.createElement('ul');
    const liEdad = document.createElement('li');
    liEdad.innerText = `Edad: ${alumno.edad}`;

    const liNota = document.createElement('li')
    liNota.innerText = `Nota: ${alumno.nota}`;

    ul.append(liEdad, liNota);

    article.append(h3, ul);


    return article;

}

function pintarLista(lista, domEl){
    for(let item of lista){
        domEl.append(pintarAlumno(item));
    }
}

pintarLista(listadoAlumnos, document.body);

/* 
        - Crear article
        - Crear h3
            - Modificar el innertText del h3 (nombre y apellidos)
        - Crear UL 
            - Crear LI con la edad
            - Crear LI con la nota
            - Agregar los LIs al UL
        - Agregar el H3 y el UL al article

        pintarAlumno(alumnos[4]);
    */

const alumnosRojo = listadoAlumnos.filter((alumno) => {
    return alumno.nota <= 3;
})

pintarLista(alumnosRojo, document.body);

const alumnosNaranja = listadoAlumnos.filter(alumno => alumno.nota > 3 && alumno.nota < 5);
pintarLista(alumnosNaranja, document.body);

const alumnosVerde = listadoAlumnos.filter(alumno => alumno.nota >=5);
pintarLista(alumnosVerde, document.body);