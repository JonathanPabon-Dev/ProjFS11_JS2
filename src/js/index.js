import {
  loadTrendMovies,
  loadWatchedMovies,
  loadQueueMovies,
  loadSameMovies,
} from './movies.js';
import { toggleModal } from './modal-info.js';
import { renderPaginator } from './pagination.js';

document.addEventListener('DOMContentLoaded', e => {
  e.preventDefault();
  let sameMovies = [];
  let totalPages = 0;
  let currentPage = 1;
  const header = document.querySelector('.header');
  const form = document.querySelector('.form');
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

  loadPage();

  function resizePaginator() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 768) {
      renderPaginator(totalPages, currentPage);
    } else {
      renderPaginator(totalPages, currentPage, true);
    }
    loadPaginator();
  }

  window.addEventListener('resize', resizePaginator);

  function loadPaginator() {
    document.querySelectorAll('.pg-btn').forEach(button => {
      button.addEventListener('click', async () => {
        if (button.id === 'prev-btn') {
          currentPage--;
        } else if (button.id === 'next-btn') {
          currentPage++;
        } else {
          currentPage = Number(button.textContent);
        }

        await displayMovies(currentPage);

        resizePaginator();

        const moviesPerPage = 20;
        console.log(
          'Start: ' + (button.textContent - 1) * moviesPerPage,
          'End: ' + (button.textContent * moviesPerPage - 1)
        );
        console.log(button);
      });
    });
  }
});
