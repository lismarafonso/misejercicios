console.log("Hola, ya sé programar en Node.js");

let dias = ["lunes","martes","miércoles","jueves","Viernes","Sábado","domingo"];

console.log(dias[0]);//lunes
console.log(dias.length);//7
console.log(dias[dias.length-1]);//domingo
console.log(dias[7]);//undefined
dias[6]="sunday";//modificando un elemento (posición 6)
console.log(dias[dias.length-1]);//sunday
dias[7]="otro";//agregando un nuevo elemento (posición 7)
console.log(dias[7]);//otro
dias[20]="veinte";//agregando un nuevo elemento (posición 20)
console.log(dias[20]);//veinte
console.log(dias[19]);//undefined
console.log(dias.length);//21
//Recorremos el array con un bucle for 'tradicional'
for (let i=0;i<dias.length;i++){
    console.log(`DIA:${dias[i]}`);
}
//Recorremos el array con un foreach
dias.forEach(mostrar);
function mostrar(d)
{
    console.log(d.toUpperCase());
}
//Recorremos el array con un foreach - función anónima
dias.forEach(function(d) {console.log(d.toLowerCase())});

//Recorremos el array con un foreach - función flecha
dias.forEach((d) => {console.log(d.replaceAll('a','@'))});

//Recorremos el array con un foreach - función flecha
dias.forEach(d => console.log(d.replaceAll('e','3')));




















let nombres = Array("Pedro","Anna","Arturo","Susana");
nombres[nombres.length]="Víctor";
nombres.push("Nía");
nombres.forEach((nombre) => console.log(nombre.toUpperCase()));

//Método filter
console.log(nombres);
let resultado = 
    nombres.filter((nombre)=> nombre.length>4 && nombre.toUpperCase().includes('A'));
console.log(resultado);

//Método map
//Obtener el array en mayúsculas
let nombresMayusculas = nombres.map((nombre)=> nombre.toUpperCase());
console.log(nombresMayusculas); 

//Obtener una copia del array sustituyendo las 'a' por '@'
let nombresConArroba = nombres.map((nombre) => nombre.replaceAll('a','@'));
console.log(nombresConArroba);

//Map y Filter
//Dado el array de nombres en una única línea vamos a cambiar las 'n' por 'N' y
//a obtener un array con los nombres de menos de 5 caracteres
let arrayResultando = 
    nombres.map(nombre=>nombre.replaceAll('n','N')).filter(nombre=>nombre.length<5);
console.log(arrayResultando);

//find --> Devuelve el primer elemento que cumple la condición
let nombreBuscado = nombres.find(nombre=>nombre.length<4);
console.log(nombreBuscado);//Nía

//some --> Indica si hay elementos que cumplen una condición
let hayNombresLargos = nombres.some((nombre)=>nombre.length>10);
console.log(hayNombresLargos);//false

//sort --> Ordena
let numeros = [3, 8, 1, -5, 3];
let numerosOrdenados=numeros.sort(compararNumeros);
console.log(numerosOrdenados)

function compararNumeros(n1, n2)
{
    return Math.abs(n2)-Math.abs(n1);
}


















