get = ' http://localhost:3000/peliculas'

const inventario = document.querySelector ('#inventario');

function cargarUsuarios() {
    fetch(' http://localhost:3000/peliculas')
        .then(respuesta => respuesta.json())
        .then(data => console.log(data))
    }

    cargarUsuarios()

    function cargarpeliculas() {
    fetch('http://localhost:3000/peliculas')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(pelicula => {
            pelicula.forEach(pelicula => {
                const article = document.createElement('article');
                article.innerHTML += `
                    <figure>
                                <img src="${pelicula.poster}" alt="poster">
                                <figcaption>
                                    <h2>${pelicula.nombre}</h2>                                                    
                                    <p>${pelicula.description}</p>
                                </figcaption>
                    <figure>                  
                `;
                inventario.appendChild(article);

            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarpeliculas();

const info = document.querySelector('.info');

function cargardetallespeliculas() {
    fetch('http://localhost:3000/peliculas')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        .then(pelicula => {
            pelicula.forEach(pelicula => {
                const article = document.createElement('article');
                article.innerHTML += `
                <table> 
                <tbody>
                    <tr>
                        <td> 
                            <img src="" alt="poster" id="img_descp">
                               
                        </td>
                        <td> 
                            <h2></h2>                                                    
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </td>
                    </tr>
                </tbody>
            </table>              
                `;
                inventario.appendChild(article);

            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}


