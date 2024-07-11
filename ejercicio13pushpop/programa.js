const DELAY_CREACION = 3000;
const DELAY_CONSUMO = 5000;
setInterval(crearTarea, DELAY_CREACION);
setInterval(consumirTarea,DELAY_CONSUMO)
let cola = [];
let contador = 0;
function crearTarea()
{
    console.log("Creando tarea...");
    contador++;
    cola.push(`Tarea${contador}`);//Agregamos al final de la lista 
    //cola.unshift(`Tarea${cola.length}`);//Agregamos al principio de la lista
    mostrarCola() 
    }
    function consumirTarea() {
        //cola.pop();Obtiene el ultimo elemento de la lista y lo elimina
        let tarea = cola.shift();//Obtiene el primer elemento de la lista y lo elimina
        console.log(`Realizando la tarea ${tarea}`);
        mostrarCola();
    }
    function mostrarCola(){
        let textoHTML = "";
        cola.map(tarea=>{
            textoHTML+=`<div class='tarea'>${tarea}</div>`;

        });
        document.querySelector("body").innerHTML=textoHTML

    
}