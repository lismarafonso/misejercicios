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
    client.send();
}  

function mostrarDatos(datos)
{
    let peliculas = JSON.parse(datos);
    peliculas.forEach(peliculas => {
        let ficha = `<div class="pelicula">
            <div class="titulo">${pelicula.titulo}</div>
            <div class="plataforma">${pelicula.plataforma}</div>
            <div class="imagen">
                <img src="${pelicula.caratula}">
            </div>
        </div>`;
    document.querySelector("#peliculas").innerHTML+=ficha; 
    });   
}

function mostrarPaginaError(codigo){
    document.querySelector("#peliculas").innerHTML=`<h1>Ha ocurrido un error:${codigo}</h1>`;   
}

getPeliculas("http://localhost",5501,"datos.json");