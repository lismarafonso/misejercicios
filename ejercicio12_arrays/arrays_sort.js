class Vehiculo {
    constructor(nombre, precio, consumo) {
        console.log("Constructor...");
        this.nombre = nombre;
        this.precio = precio;
        this.consumo = consumo;
    }
}
let jcCar = new Vehiculo("Seat Ibiza", 10_000, 5.3);
let fpCar = new Vehiculo("Kia Ceed", 9_500, 6.4);
let laraCar = new Vehiculo("Mercedes", 35_000, 8.5);
let vehiculos = [];
vehiculos.push(jcCar);
vehiculos.push(fpCar);
vehiculos.push(laraCar);
console.log(vehiculos);

vehiculos.sort(ordenar);
console.log(vehiculos);

function ordenar(v1, v2)
{
    console.log("ORDENADO");
    return v1.precio-v2.precio;
}
