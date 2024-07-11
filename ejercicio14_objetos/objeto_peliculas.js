let estadosUnidos = {
    nombre : "Estados Unidos",
    continente : "America"

}
let harrisonFord = {
    nombre : "Harrison Ford",
    pais : estadosUnidos
}
let markHamil = {
    nombre : "Mark Hamil",
    pais : estadosUnidos
}
let starWarsEpisodioIV = {
    titulo : "Star Wars Episodio IV",
    director : "George Lucas",
    actores : [harrisonFord, markHamil]

}
let starWarsEpisodioV = {
    titulo : "Star Wars Episodio V",
    director : "George Lucas",
    actores : [harrisonFord, markHamil]
}

let sagaStarWars = [starWarsEpisodioIV, starWarsEpisodioV, starWarsEpisodioVI];

console.log(sagaStarWars);