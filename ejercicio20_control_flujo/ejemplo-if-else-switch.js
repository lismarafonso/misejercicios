let salario = 10_000;

if (salario < 20_000) {
    console.log("Salario insuficiente.");
} else if (salario < 30_000) {
    console.log("No esta mal")
} else {
    console.log("Esta bien");
}





let edad = 50;
let estadoCivil = "Soltero";
let idiomas = ["Ingles", "Español", "Frances", "Chino"];
let permisoConducir = true;
let movilidadGeografica = true;

if ((edad >= 18) && (estadoCivil === "Soltero") && (idiomas.includes("Ingles")) && (permisoConducir === true) && (movilidadGeografica === true)) {
    console.log("Cumple los requisitos");

} else {
    console.log("No cumple los requisitos");
}

//*****************************


let esMayorDeEdad = edad >= 18;
let esSoltero = estadoCivil === "Soltero";
let sabeIngles = idiomas.includes("Ingles");

if (esMayorDeEdad && esSoltero && sabeIngles && permisoConducir && movilidadGeografica) {
    console.log("Adelante");
} else {
    console.log("Descartado");
}




let tipoContrato = 2;

if (tipoContrato == 1) {
    console.log("Tipo 1");
} else if (tipoContrato == 2) {
    console.log("Tipo 2");
} else if (tipoContrato == 3) {
    console.log("Tipo 3");
} else {
    console.log("No se el tipo de contrato")
}

switch (tipoContrato) {
    case 1:
        console.log("Tipo 1");
        break;
    case 2, 0:
        console.log("Tipo 2 o 0");
        break;
    case 3:
        console.log("Tipo 3");
        break;
    default:
        console.log("No se el tipo de contrato");
}

