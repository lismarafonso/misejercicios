/*Pelicula:
-Titulo
-Duracion 
-Genero
-Clasificacion

-Creamos 3 instancias (objetos) 
Dos de ellos son del genero terror.
-Obtener las peliculas del genero terror ordenadas por clasificacion*/


// Definición de la clase Pelicula
class Pelicula {
    constructor(titulo, duracion, genero, clasificacion) {
      this.titulo = titulo;
      this.duracion = duracion;
      this.genero = genero;
      this.clasificacion = clasificacion;
    }
  }
  
  // Creación de tres instancias de Pelicula
  let  pelicula1 = new Pelicula('El Aro', 115, 'Terror', 8.2);
  let pelicula2 = new Pelicula('El Conjuro', 112, 'Terror', 8.0);
  let pelicula3 = new Pelicula('Inception', 148, 'Ciencia Ficción', 8.8);
  
  // Array de películas
  let peliculas = [pelicula1, pelicula2, pelicula3];
  
  // Filtrar las películas del género terror
  let peliculasTerror = peliculas.filter(pelicula => pelicula.genero === 'Terror');
  
  // Ordenar las películas de terror por clasificación
  let peliculasTerrorOrdenadas = peliculasTerror.sort((a, b) => b.clasificacion - a.clasificacion);
  
  // Mostrar el resultado
  console.log(peliculasTerrorOrdenadas);
  