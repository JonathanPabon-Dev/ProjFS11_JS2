import { onAuthStateChanged } from 'firebase/auth';
import { auth, loginGoogle, logOut } from './firebase.js';
import {
  loadTrendMovies,
  loadWatchedMovies,
  loadQueueMovies,
  loadSameMovies,
} from './movies.js';
import { toggleModal } from './modal-info.js';

const header = document.querySelector('.header');
const form = document.querySelector('.form');
const searcher = document.querySelector('input');
const homeBtn = document.querySelector('#homeBtn');
const libraryBtn = document.querySelector('#libraryBtn');
const headerSearch = document.querySelector('.headerSearch');
const headerBtns = document.querySelector('.headerBtns');
const watchedBtn = document.querySelector('#watched-btn');
const queueBtn = document.querySelector('#queue-btn');
const movieContainer = document.querySelector('#movie-container');
const gBtn = document.querySelector('a[sign-up-g]');
const logOutBtn = document.querySelector('#log-out-btn');
document.addEventListener('DOMContentLoaded', e => {
  e.preventDefault();
  loadPage();

  gBtn.addEventListener('click', loginGoogle);
  logOutBtn.addEventListener('click', logOut);
  function loadPage() {
    loadTrendMovies();
    searcher.textContent = '';
    searcher.value = '';
  }

  homeBtn.addEventListener('click', () => {
    header.classList.remove('header-library');
    homeBtn.classList.add('active');
    libraryBtn.classList.remove('active');
    headerBtns.classList.add('is-hidden');
    headerSearch.classList.remove('is-hidden');
    loadTrendMovies();
    searcher.textContent = '';
    searcher.value = '';
  });

  libraryBtn.addEventListener('click', () => {
    header.classList.add('header-library');
    libraryBtn.classList.add('active');
    homeBtn.classList.remove('active');
    watchedBtn.classList.add('library-header__button--active');
    queueBtn.classList.remove('library-header__button--active');
    headerSearch.classList.add('is-hidden');
    headerBtns.classList.remove('is-hidden');
    loadWatchedMovies();
  });

  watchedBtn.addEventListener('click', () => {
    watchedBtn.classList.add('library-header__button--active');
    queueBtn.classList.remove('library-header__button--active');
    loadWatchedMovies();
  });

  queueBtn.addEventListener('click', () => {
    queueBtn.classList.add('library-header__button--active');
    watchedBtn.classList.remove('library-header__button--active');
    loadQueueMovies();
  });

  movieContainer.addEventListener('click', event => {
    const movieId = event.target.dataset.modalOpen || '0';
    if (movieId === '0') return;
    toggleModal(movieId);
  });

  form.addEventListener('submit', () => {
    event.preventDefault();

    const query = document.querySelector('.header__searcher').value;
    loadSameMovies(query);
  });

  onAuthStateChanged(auth, user => {
    if (user !== null) {
      gBtn.classList.add('is-hidden');
      logOutBtn.classList.remove('is-hidden');
    } else {
      libraryBtn.classList.add('is-hidden');
      gBtn.classList.remove('is-hidden');
      logOutBtn.classList.add('is-hidden');
      header.classList.remove('header-library');
      homeBtn.classList.add('active');
      libraryBtn.classList.remove('active');
      headerBtns.classList.add('is-hidden');
      headerSearch.classList.remove('is-hidden');
      loadTrendMovies();
    }
  });
});
export function renderLibraryHeader(index = 0) {
  if (index == 0) {
    header.classList.add('header-library');
    libraryBtn.classList.add('active');
    homeBtn.classList.remove('active');
    watchedBtn.classList.add('library-header__button--active');
    queueBtn.classList.remove('library-header__button--active');
    headerSearch.classList.add('is-hidden');
    headerBtns.classList.remove('is-hidden');
  } else {
    header.classList.add('header-library');
    libraryBtn.classList.add('active');
    homeBtn.classList.remove('active');
    watchedBtn.classList.remove('library-header__button--active');
    queueBtn.classList.add('library-header__button--active');
    headerSearch.classList.add('is-hidden');
    headerBtns.classList.remove('is-hidden');
  }
}
