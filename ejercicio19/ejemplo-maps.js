const alumnos = new Map([
    ["Lismar", 28],
    ["Kleer", 31],
    ["Lara", 29],
]);

// Mostrar la edad de Kleer
console.log(alumnos.get("Kleer"));



let peli1 = {
    director: "Nick Cassavetes",
    genero: "Romantico",
    año: 2004,
    duracion: "121 min"
}

let peli2 = {
    director: "James Cameron",
    genero: "Romantica, Tragica",
    año: 1997,
    duracion: "194 min"
}

let peli3 = {
    director: "Steven Spielberg",
    genero: "Suspenso",
    año: 1975,
    duracion: "124 min"
}

let peliculas = new Map([
        ["The Notebook", peli1],
        ["Titanic", peli2],
        ["Tiburon", peli3],
    ]);

    console.log(peliculas.get("The Notebook").director);
    console.log(peliculas.get("Titanic").año);
    console.log(peliculas.get("Tiburon").genero);


