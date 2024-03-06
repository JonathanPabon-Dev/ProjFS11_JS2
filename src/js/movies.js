import { fetchGenres, fetchTrendMovies, fetchSameMovies } from './api.js';
import { getWatchedList, getQueueList } from './add-movie.js';

let genres = [];
const movies = document.getElementById('movies');

export async function loadTrendMovies() {
  await fetchTrendMovies()
    .then(data => {
      renderMovieGallery(data.results);
    })
    .catch(error => console.error(error));
}

export async function loadSameMovies(query, page = 1) {
  await fetchSameMovies(query, page)
    .then(data => {
      renderMovieGallery(data.results);
    })
    .catch(error => console.error(error));
}

export function loadWatchedMovies() {
  const watchedList = getWatchedList();
  if (watchedList.length === 0) {
    alert('No watched movies found!');
  }
  renderMovieGallery(watchedList);
}

export function loadQueueMovies() {
  const queueList = getQueueList();
  if (queueList.length === 0) {
    alert('No queue movies found!');
  }
  renderMovieGallery(queueList);
}

async function renderMovieGallery(dataMovies) {
  await fetchGenres().then(data => {
    genres = data.genres;
  });
  const movieContainer = document.getElementById('movie-container');
  movieContainer.innerHTML = '';

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
