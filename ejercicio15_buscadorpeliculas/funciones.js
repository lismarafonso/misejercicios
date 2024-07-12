let peliculas = new Array();

document.querySelector("#bAgregar").addEventListener("click", (event) => {
    let nombre = document.querySelector("#iNombre").value;
    let genero = document.querySelector("#iGenero").value;
    let fotografia = document.querySelector("#iFotografia").value;
    let pelicula = {
        nombre: nombre,
        genero: genero,
        fotografia: fotografia
    }
    peliculas.push(pelicula);
    crearListadoPeliculas(peliculas);
});

function crearListadoPeliculas(peliculas) {
    let htmlPeliculas = "";
    peliculas.map((pelicula) => {
        htmlPeliculas += `<div class="nombre">
            <div class="nombre-pelicula">${pelicula.nombre}</div>
            <div class="genero-genero">${pelicula.genero}</div>
            <div class="div-imagen">
                <img src="${pelicula.fotografia}">
            </div>
        </div>`;
    });
    document.querySelector("#peliculas").innerHTML=htmlPeliculas;

    document.querySelector("#iNombre").value="";
    document.querySelector("#iGenero").value="";
    document.querySelector("#iFotografia").value="";
}
