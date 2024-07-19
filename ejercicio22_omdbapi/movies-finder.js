const API_KEY = 'fe486a03';
const SERVER_URL = 'https://www.omdbapi.com'
const SERVER_PORT = 443;

document.querySelector("#bBuscar").addEventListener("click", () => {
    getMovies(1);
});

function getMovies(pageNumber) {
    const tituloBuscado = document.querySelector("#iTitulo").value;
    doGetHTTPRequest(
        SERVER_URL,
        SERVER_PORT,
        `?apikey=${API_KEY}&s=${tituloBuscado}&page=${pageNumber}`,
        processData,
        processError)
}

function processData(data) {
    const peliculas = JSON.parse(data);
    const numeroPaginas = Math.ceil(peliculas.totalResults / 10);
    document.querySelector("#contenedor-peliculas").innerHTML = "";
    document.querySelector("#paginacion").innerHTML = "";
    peliculas.Search.forEach(pelicula => {
        document.querySelector("#contenedor-peliculas").innerHTML +=
            `<div class='pelicula'>
                <div class='titulo'>${pelicula.Title}</div>
                <div class='poster'><img src=${pelicula.Poster}></div>
            </div>`;
    });
    for (let i = 1; i < numeroPaginas + 1; i++) {
        document.querySelector("#paginacion").innerHTML +=
            `<a href='#' onclick='getMovies(${i})'>${i}</a>&nbsp`;
    }
}

function processError(error) {
    console.log(error);
}
