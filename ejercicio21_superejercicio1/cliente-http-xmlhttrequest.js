function getPeliculas(url, port, recurso) {
    const client = new XMLHttpRequest();

    client.addEventListener("readystatechange", () => {
        const isDone = client.readyState === 4;//Ha terminado
        const isOk = client.status === 200;//OK
        console.error(client.status);

        if (isDone && isOk) {
            mostrarDatos(client.responseText);
        } else if (isDone && !isOk) {
            mostrarPaginaError(client.status);
        }
    });
    client.open("GET", `${url}:${port}/${recurso}`);
    console.log(`${url}:${port}/${recurso}`);
    client.send();
}

function mostrarDatos(datos) {
    let peliculas = JSON.parse(datos);
    peliculas.Search.forEach(pelicula => {
        let ficha = `<div class="pelicula">
            <div class="titulo">${pelicula.Title}</div>
            <div class="plataforma">${pelicula.Year}</div>
            <div class="imagen">
                <img src="${pelicula.Poster}">
            </div>
        </div>`;
        document.querySelector("#peliculas").innerHTML += ficha;
    });
}

function mostrarPaginaError(codigo) {
    document.querySelector("#peliculas").innerHTML = `<h1>Ha ocurrido un error:${codigo}</h1>`;
}

getPeliculas("https://www.omdbapi.com", 443, "?apikey=8dfe0266&s=avengers&pages=2");