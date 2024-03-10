import { fetchGenres, fetchTrendMovies, fetchSameMovies } from './api.js';
import { getMoviesQueued, getMoviesWatched } from './firebase.js';
import { showLoader, hideLoader } from './loader.js';
import { getSection } from './index.js';
import Notiflix from 'notiflix';

export async function loadTrendMovies(page) {
  showLoader();
  let total_movies = 0;
  await fetchTrendMovies(page)
    .then(data => {
      total_movies = data.total_results;
      renderMovieGallery(data.results);
    })
    .catch(error => Notiflix.Notify.failure('error', error));
  return total_movies;
}

export async function loadSameMovies(query, page) {
  showLoader();
  let total_movies = 0;
  await fetchSameMovies(query, page)
    .then(data => {
      total_movies = data.total_results;
      renderMovieGallery(data.results);
    })
    .catch(error => Notiflix.Notify.failure(error));
  return total_movies;
}

export async function loadWatchedMovies(page, moviesPerPage) {
  showLoader();
  let moviesWatchedFirebase = await getMoviesWatched();
  let watchedList = [];
  moviesWatchedFirebase.forEach(doc => watchedList.push(doc.data()));

  let start = (page - 1) * moviesPerPage;
  let end = Math.min(page * moviesPerPage, watchedList.length);
  let moviesPagination = watchedList.slice(start, end);

  renderMovieGallery(moviesPagination);
  if (moviesWatchedFirebase.length === 0) {
    Notiflix.Notify.failure('No watched movies found!');
  }
  return watchedList.length;
}

export async function loadQueueMovies(page, moviesPerPage) {
  showLoader();
  let moviesQueuedFirebase = await getMoviesQueued();
  let queuedList = [];
  moviesQueuedFirebase.forEach(doc => queuedList.push(doc.data()));

  let start = (page - 1) * moviesPerPage;
  let end = Math.min(page * moviesPerPage, queuedList.length);
  let moviesPagination = queuedList.slice(start, end);

  renderMovieGallery(moviesPagination);
  if (queuedList.length === 0) {
    Notiflix.Notify.failure('No queue movies found!');
  }
  return queuedList.length;
}

async function renderMovieGallery(dataMovies) {
  let genres = [];
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

    const vote = document.createElement('span');
    vote.id = 'movie-vote';
    vote.classList.add('span', 'span--orange');
    const section = getSection();
    if (section === 'trend' || section === 'same') {
      vote.classList.add('is-hidden');
    }
    vote.textContent = movie.vote_average.toFixed(1);
    vote.style.marginLeft = '10px';
    releaseYearAndGenres.appendChild(vote);

    movieLi.appendChild(releaseYearAndGenres);
    movieContainer.appendChild(movieLi);
  });
}
