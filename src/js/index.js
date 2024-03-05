import {
  loadTrendMovies,
  loadWatchedMovies,
  loadQueueMovies,
} from './movies.js';
import { toggleModal } from './modal-info.js';

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
  headerBtns.classList.add('is-hidden');
  headerSearch.classList.remove('is-hidden');
  loadTrendMovies();
});

libraryBtn.addEventListener('click', () => {
  headerSearch.classList.add('is-hidden');
  headerBtns.classList.remove('is-hidden');
  loadWatchedMovies([]);
});

watchedBtn.addEventListener('click', () => {
  loadWatchedMovies([]);
});

queueBtn.addEventListener('click', () => {
  loadQueueMovies([]);
});

movieContainer.addEventListener('click', event => {
  const movieId = event.target.dataset.modalOpen || '0';
  if (movieId === '0') return;
  toggleModal(movieId);
});

loadPage();
