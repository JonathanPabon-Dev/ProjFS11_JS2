import Notiflix from 'notiflix';
  

function searchMovies(query) {
  return new Promise((resolve, reject) => {
    // Simular búsqueda de películas
    const resultados = [
      "Avengers: Endgame",
      "Titanic",
      "Harry Potter",
      "Star Wars",
      "Jurassic Park"
    ];

    // Verificar si la consulta coincide con algún resultado
    const movieFound = resultados.find(
      (pelicula) => pelicula.toLowerCase().includes(query.toLowerCase())
    );

    if (movieFound) {
      resolve(`¡Successful search for  ${movieFound}!`);
    } else {
      reject(`Search result not successful. Enter the correct movie name and try again... `);
    }
  });
}

// Función para manejar el evento de envío del formulario
function handleSubmit(event) {
  event.preventDefault(); 

  const query = document.querySelector('.header__searcher').value;

  searchMovies(query)
    .then((result) => {
      Notiflix.Notify.success(result);
    })
    .catch((error) => {
      Notiflix.Notify.failure(error); 
    });
}

document.querySelector('.form').addEventListener('submit', handleSubmit);


