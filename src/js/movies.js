import { fetchGenres, fetchTrendMovies } from './api.js';

let genres = [];
const movies = document.getElementById('movies');

export async function loadTrendMovies() {
  await fetchTrendMovies()
    .then(data => {
      renderMovieGallery(data.results);
    })
    .catch(error => console.error(error));
}

export function loadWatchedMovies(moviesList) {
  renderMovieGallery(moviesList);
}

export function loadQueueMovies(moviesList) {
  renderMovieGallery(moviesList);
}

async function renderMovieGallery(dataMovies) {
  console.log(dataMovies.length);

  await fetchGenres().then(data => {
    genres = data.genres;
  });
  const movieContainer = document.getElementById('movie-container');
  movieContainer.innerHTML = '';

  if (dataMovies.length == 0) {
    movies.classList.add('vh');
    return;
  }
  movies.classList.remove('vh');
  dataMovies.forEach(movie => {
    const movieLi = document.createElement('li');

    const img = document.createElement('img');
    img.src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
    img.setAttribute('data-modal-open', movie.id);
    movieLi.appendChild(img);

    const title = document.createElement('p');
    title.className = 'movie-title';
    title.textContent = movie.title;
    movieLi.appendChild(title);

    const mainGenres = movie.genre_ids.slice(0, 2).map(id => {
      return genres.find(genre => genre.id === id).name;
    });

    const releaseYearAndGenres = document.createElement('p');
    releaseYearAndGenres.className = 'release-year-genres';
    releaseYearAndGenres.textContent =
      mainGenres.join(', ') + ' | ' + movie.release_date.substring(0, 4);
    movieLi.appendChild(releaseYearAndGenres);
    movieContainer.appendChild(movieLi);
  });
}
