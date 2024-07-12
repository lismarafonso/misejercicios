let enemigo1 = {
    sprite : "imagen.jpg",
    x : 0,
    y : 0,
    estado : "formacion",
    saludar(nombre){
        console.log("Hello " + nombre);
    }
};
console.log(typeof enemigo1); //object
enemigo1.saludar("Nombre1");

function Enemigo(sprite, x, y, estado){
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.estado = estado;
}

let enemigo2 = new Enemigo("imagen.jpg", 1, 0, "enformacion");
console.log(typeof enemigo2);//object

class Superenemigo {
    constructor(sprite, x, y, estado){
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.estado = "enformacion"
    }
}

let enemigo3 = new Superenemigo("imagen,png", 1, 1);
console.log(typeof enemigo3);