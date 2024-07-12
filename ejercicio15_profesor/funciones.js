let viajes = new Array();

document.querySelector("#bAgregar").addEventListener("click", (event) => {
    let destino = document.querySelector("#iDestino").value;
    let nombre = document.querySelector("#iNombre").value;
    let fotografia = document.querySelector("#iFotografia").value;
    let viaje = {
        destino: destino,
        nombre: nombre,
        fotografia: fotografia
    }
    viajes.push(viaje);
    crearListadoViajes(viajes);
});

function crearListadoViajes(viajes) {
    let htmlDestinos = "";
    viajes.map((viaje) => {
        htmlDestinos += `<div class="destino">
            <div class="nombre-viaje">${viaje.nombre}</div>
            <div class="pais-destino">${viaje.destino}</div>
            <div class="div-imagen">
                <img src="${viaje.fotografia}">
            </div>
        </div>`;
    });
    document.querySelector("#destinos").innerHTML=htmlDestinos;

    document.querySelector("#iDestino").value="";
    document.querySelector("#iNombre").value="";
    document.querySelector("#iFotografia").value="";
}