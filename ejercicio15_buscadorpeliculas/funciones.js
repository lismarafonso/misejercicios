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
    peliculas.push(peliculas);
    crearListadoPeliculas(peliculas);
});

function crearListadoPeliculas(peliculas) {
    let htmlPeliculas = "";
    peliculas.map((peliculas) => {
        htmlPeliculas += `<div class="nombre">
            <div class="nombre-pelicula">${peliculas.nombre}</div>
            <div class="genero-genero">${peliculas.genero}</div>
            <div class="div-imagen">
                <img src="${peliculas.fotografia}">
            </div>
        </div>`;
    });
    document.querySelector("#peliculas").innerHTML=htmlPeliculas;

    document.querySelector("#iNombre").value="";
    document.querySelector("#iGenero").value="";
    document.querySelector("#iFotografia").value="";
}
