const fs = require('node:fs');
function writeLog(logLine) {
    fs.appendFile('./log.txt', `${logLine}\n`, (err) => {
        if (err) {
            console.error(x);
            console.error(err);
        } else {
            console.log("Log escrito satisfactoriamente");
        }
    });
}

function sumar(sumando1, sumando2) {
    //1. Que recibamos 2 argumentos
    if (sumando1 === undefined || sumando2 === undefined) {
        throw new Error("Los dos sumandos son obligatorios");
    }
    //2. Que los 2 argumentos sean números
    if (!(typeof sumando1 === 'number') || !(typeof sumando2 === 'number')) {
        throw new Error("Los dos sumandos deben ser números");
    }
    return sumando1 + sumando2;
}

try {
    let resultado = sumar(8, false);
    console.log(resultado);
} catch (e) {
    console.error(e.message);
    writeLog(e.message);
} finally {//EL BLOQUE FINALLY SIEMPRE SE EJECUTA
    console.log("Hemos terminado el proceso");
}