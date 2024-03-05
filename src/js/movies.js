import { fetchTrendMovies, fetchGenres } from './api.js';

const genres = async () => {
  let data = await fetchGenres().then(data => {
    return data;
  });
  return data.genres;
};

fetchTrendMovies()
  .then(data => {
    renderMovieGallery(data, genres);
  })
  .catch(error => console.error(error));

async function renderMovieGallery(dataMovies, dataGenre) {
  console.log(dataGenre, typeof dataGenre);
  const movieContainer = document.getElementById('movie-container');

  dataMovies.results.forEach(movie => {
    const movieLi = document.createElement('li');

    const img = document.createElement('img');
    img.src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
    movieLi.appendChild(img);

    const title = document.createElement('p');
    title.className = 'movie-title';
    title.textContent = movie.title;
    movieLi.appendChild(title);

    const mainGenres = movie.genre_ids.slice(0, 2).map(id => {
      return dataGenre.find(genre => genre.id === id).name;
    });

    const releaseYearAndGenres = document.createElement('p');
    releaseYearAndGenres.className = 'release-year-genres';
    releaseYearAndGenres.textContent =
      mainGenres.join(', ') + ' | ' + movie.release_date.substring(0, 4);
    movieLi.appendChild(releaseYearAndGenres);
    movieContainer.appendChild(movieLi);
  });
}
