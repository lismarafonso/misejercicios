function comprobarSensores() {
    //if (comprobarSensor1() && comprobarSensor2())//Si la primera parte es false, no se evalúa la segunda
    if (comprobarSensor1() & comprobarSensor2())//Se evalúan las dos partes de la expresión
    {
        alert("Todo ok");
    } else {
        alert("Hay error");
    }
}
function comprobarSensor1() {

    //return !(valorSensor1<10); //Solución alternativa. ¿Legible?
    let valorSensor1 = document.getElementById("sensor1").value;
    let sensorOK;
    if (valorSensor1<10) {
        sensorOK = false;
        document.querySelector("#marcador1").classList.remove("verde");
        document.querySelector("#marcador1").classList.add("rojo");
    } else {
        sensorOK = true;
        document.querySelector("#marcador1").style.backgroundColor="orange";
        document.querySelector("#marcador1").classList.remove("rojo");
        document.querySelector("#marcador1").classList.add("verde");
    }
    return sensorOK;
}
function comprobarSensor2() {

    //return !(valorSensor2<10); //Solución alternativa.
    let valorSensor2 = document.getElementById("sensor2").value;
    let sensorOK = valorSensor2<10 ? false : true;
    if (sensorOK)
    {
        document.querySelector("#marcador2").classList.remove("rojo");
        document.querySelector("#marcador2").classList.add("verde");
    } else {
        document.querySelector("#marcador2").classList.remove("verde");
        document.querySelector("#marcador2").classList.add("rojo");
    }
    return sensorOK;
}

