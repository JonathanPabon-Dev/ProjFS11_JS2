import {
  loadTrendMovies,
  loadWatchedMovies,
  loadQueueMovies,
} from './movies.js';
import { toggleModal } from './modal-info.js';

const header = document.querySelector('.header');
const homeBtn = document.querySelector('#homeBtn');
const libraryBtn = document.querySelector('#libraryBtn');
const headerSearch = document.querySelector('.headerSearch');
const headerBtns = document.querySelector('.headerBtns');
const watchedBtn = document.querySelector('#watched-btn');
const queueBtn = document.querySelector('#queue-btn');
const movieContainer = document.querySelector('#movie-container');

function loadPage() {
  loadTrendMovies();
}

homeBtn.addEventListener('click', () => {
  header.classList.remove('header-library');
  homeBtn.classList.add('active');
  libraryBtn.classList.remove('active');
  headerBtns.classList.add('is-hidden');
  headerSearch.classList.remove('is-hidden');
  loadTrendMovies();
});

libraryBtn.addEventListener('click', () => {
  header.classList.add('header-library');
  libraryBtn.classList.add('active');
  homeBtn.classList.remove('active');
  headerSearch.classList.add('is-hidden');
  headerBtns.classList.remove('is-hidden');
  loadWatchedMovies([]);
});

watchedBtn.addEventListener('click', () => {
  watchedBtn.classList.add('library-header__button--active');
  queueBtn.classList.remove('library-header__button--active');
  loadWatchedMovies([]);
});

queueBtn.addEventListener('click', () => {
  queueBtn.classList.add('library-header__button--active');
  watchedBtn.classList.remove('library-header__button--active');
  loadQueueMovies([]);
});

movieContainer.addEventListener('click', event => {
  const movieId = event.target.dataset.modalOpen || '0';
  if (movieId === '0') return;
  toggleModal(movieId);
});

loadPage();
