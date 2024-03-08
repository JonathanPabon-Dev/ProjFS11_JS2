import { onAuthStateChanged } from 'firebase/auth';
import { auth, loginGoogle, logOut } from './firebase.js';
import {
  loadTrendMovies,
  loadWatchedMovies,
  loadQueueMovies,
  loadSameMovies,
} from './movies.js';
import { toggleModal } from './modal-info.js';
import { renderPaginator, resizePaginator } from './pagination.js';
import Notiflix from 'notiflix';

const header = document.querySelector('.header');
const form = document.querySelector('.form');
const searcher = document.querySelector('input');
const homeBtn = document.querySelector('#homeBtn');
const libraryItem = document.querySelector('#library');
const libraryBtn = document.querySelector('#libraryBtn');
const headerSearch = document.querySelector('.headerSearch');
const headerBtns = document.querySelector('.headerBtns');
const watchedBtn = document.querySelector('#watched-btn');
const queueBtn = document.querySelector('#queue-btn');
const movieContainer = document.querySelector('#movie-container');
const pgContainer = document.querySelector('.pg-container');
const gBtn = document.querySelector('a[sign-up-g]');
const logOutBtn = document.querySelector('#log-out-btn');
const topBtn = document.querySelector('#top-btn');

let totalResults = 0;
let currentPage = 1;
let moviesPerPage = 20;
const Sections = {
  Trend: 'trend',
  Same: 'same',
  Watched: 'watched',
  Queue: 'queue',
};
let section;

document.addEventListener('DOMContentLoaded', e => {
  e.preventDefault();

  // Cargue inicial
  loadPage();

  // Métodos
  function loadPage() {
    section = Sections.Trend;
    (async () => {
      totalResults = await loadTrendMovies(currentPage);
      loadPaginator(currentPage, totalResults);
      resizePaginator(totalResults, currentPage);
    })();
    searcher.textContent = '';
    searcher.value = '';
  }

  function loadPaginator(page, total_results) {
    if (totalResults > moviesPerPage) {
      renderPaginator(page, total_results);
      pgContainer.classList.remove('is-hidden');
    } else {
      pgContainer.classList.add('is-hidden');
    }
  }

  function loadMoviesSection(movieSection) {
    switch (movieSection) {
      case Sections.Trend:
        loadTrendMovies(currentPage);
        break;
      case Sections.Same:
        const query = document.querySelector('.header__searcher').value;
        loadSameMovies(query, currentPage);
        break;
      case Sections.Watched:
        loadWatchedMovies(currentPage, moviesPerPage);
        break;
      case Sections.Queue:
        loadQueueMovies(currentPage, moviesPerPage);
        break;
      default:
        loadPage();
        break;
    }
  }

  // Eventos
  gBtn.addEventListener('click', loginGoogle);
  logOutBtn.addEventListener('click', logOut);

  homeBtn.addEventListener('click', () => {
    section = Sections.Trend;
    header.classList.remove('header-library');
    homeBtn.classList.add('active');
    libraryBtn.classList.remove('active');
    headerBtns.classList.add('is-hidden');
    headerSearch.classList.remove('is-hidden');
    currentPage = 1;
    loadPage();
  });

  libraryBtn.addEventListener('click', () => {
    section = Sections.Watched;
    header.classList.add('header-library');
    libraryBtn.classList.add('active');
    homeBtn.classList.remove('active');
    watchedBtn.classList.add('library-header__button--active');
    queueBtn.classList.remove('library-header__button--active');
    headerSearch.classList.add('is-hidden');
    headerBtns.classList.remove('is-hidden');
    currentPage = 1;
    (async () => {
      totalResults = await loadWatchedMovies(currentPage, moviesPerPage);
      loadPaginator(currentPage, totalResults);
    })();
  });

  watchedBtn.addEventListener('click', () => {
    section = Sections.Watched;
    watchedBtn.classList.add('library-header__button--active');
    queueBtn.classList.remove('library-header__button--active');
    currentPage = 1;
    (async () => {
      totalResults = await loadWatchedMovies(currentPage, moviesPerPage);
      loadPaginator(currentPage, totalResults);
    })();
  });

  queueBtn.addEventListener('click', () => {
    section = Sections.Queue;
    queueBtn.classList.add('library-header__button--active');
    watchedBtn.classList.remove('library-header__button--active');
    currentPage = 1;
    (async () => {
      totalResults = await loadQueueMovies(currentPage, moviesPerPage);
      loadPaginator(currentPage, totalResults);
    })();
  });

  movieContainer.addEventListener('click', event => {
    const movieId = event.target.dataset.modalOpen || '0';
    if (movieId === '0') return;
    toggleModal(movieId);
  });

  form.addEventListener('submit', ev => {
    ev.preventDefault();

    section = Sections.Same;
    const query = document.querySelector('.header__searcher').value;

    currentPage = 1;
    (async () => {
      totalResults = await loadSameMovies(query, currentPage);
      loadPaginator(currentPage, totalResults);
    })();
  });

  onAuthStateChanged(auth, user => {
    if (user !== null) {
      gBtn.classList.add('is-hidden');
      logOutBtn.classList.remove('is-hidden');
    } else {
      library.classList.add('is-hidden');
      gBtn.classList.remove('is-hidden');
      logOutBtn.classList.add('is-hidden');
      header.classList.remove('header-library');
      homeBtn.classList.add('active');
      library.classList.remove('active');
      headerBtns.classList.add('is-hidden');
      headerSearch.classList.remove('is-hidden');
      loadPage();
    }
  });

  pgContainer.addEventListener('click', ev => {
    try {
      const value = ev.target.closest('button').value;
      if (value === 'Prev') {
        currentPage--;
      } else if (value === 'Next') {
        currentPage++;
      } else {
        currentPage = Number(value);
      }
    } catch (error) {
      currentPage = 1;
      Notiflix.Notify.failure(typeof error);
    } finally {
      loadPaginator(currentPage, totalResults);
      loadMoviesSection(section);
    }
  });

  window.addEventListener('resize', () => {
    resizePaginator(totalResults, currentPage);
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      topBtn.classList.remove('is-hidden');
    } else {
      topBtn.classList.add('is-hidden');
    }
  });

  topBtn.addEventListener('click', () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
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
