import { fetchGenres, fetchTrendMovies, fetchSameMovies } from './api.js';
import { getWatchedList, getQueueList } from './add-movie.js';
import { showLoader, hideLoader } from './loader.js';
import { renderPaginator } from './pagination.js';
import Notiflix from 'notiflix';

let genres = [];
const paginatorContainer = document.getElementById('pg-container');

export async function loadTrendMovies() {
  showLoader();
  await fetchTrendMovies()
    .then(data => {
      renderMovieGallery(data.results);
    })
    .catch(error => Notiflix.Notify.failure(error));
}

export async function loadSameMovies(query, page = 1) {
  showLoader();
  await fetchSameMovies(query, page)
    .then(data => {
      renderMovieGallery(data.results);
      if (data.total_results > 20) {
        renderPaginator(page, data.total_results);
        paginatorContainer.classList.remove('is-hidden');
      } else {
        paginatorContainer.classList.add('is-hidden');
      }
    })
    .catch(error => Notiflix.Notify.failure(error));
}

export function loadWatchedMovies() {
  showLoader();
  const watchedList = getWatchedList();
  renderMovieGallery(watchedList);
  if (watchedList.length === 0) {
    Notiflix.Notify.failure('No watched movies found!');
  } else if (watchedList.length > 20) {
    renderPaginator(1, watchedList.length);
  }
}

export function loadQueueMovies() {
  showLoader();
  const queueList = getQueueList();
  if (queueList.length === 0) {
    Notiflix.Notify.failure('No queue movies found!');
  }
  renderMovieGallery(queueList);
}

async function renderMovieGallery(dataMovies) {
  await fetchGenres()
    .then(data => {
      genres = data.genres;
    })
    .catch(error => Notiflix.Notify.failure(error));
  hideLoader();
  const movieContainer = document.getElementById('movie-container');
  movieContainer.innerHTML = '';

  dataMovies.forEach(movie => {
    const movieLi = document.createElement('li');

    const img = document.createElement('img');
    if (movie.poster_path !== null) {
      img.src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
    } else {
      img.src = new URL('../images/not-found.jpg', import.meta.url);
    }
    img.setAttribute('data-modal-open', movie.id);
    img.setAttribute('loading', 'lazy');
    movieLi.appendChild(img);

    const title = document.createElement('p');
    title.className = 'movie-title';
    title.textContent = movie.title;
    movieLi.appendChild(title);

    const mainGenres = movie.genre_ids.map(id => {
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
