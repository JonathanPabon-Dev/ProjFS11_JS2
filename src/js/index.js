import { fetchTrendMovies, fetchSimilarMovies } from './api.js';
import { toggleModal } from './modal-info.js';
import { renderPaginator } from './pagination.js';

document.addEventListener('DOMContentLoaded', async e => {
  e.preventDefault();
  let sameMovies = [];
  let totalPages = 0;
  let currentPage = 1;
  const galleryList = document.getElementById('gallery-list');
  const firstModal = document.querySelector('li[first-modal]');

  fetchTrendMovies().then(data => {
    firstModal.classList.add('is-hidden');
    data.results.forEach(element => {
      galleryList.innerHTML += `
    <li class="gallery__item">
    <div class="gallery__container" id=${element.id} data-modal-open="">
    <img
    class="gallery__img"
    src="https://image.tmdb.org/t/p/original${element.poster_path}"
    alt="${element.title}"
    />
    </div>
    <div class="gallery__description">
    <h3 class="gallery__title" style="font-style:uppercase">${element.title}</h3>
    <p class="gallery__subtitle">${element.genre_ids} | </p>
    </div>
    </div>
    </li>`;
    });
  });

  galleryList.addEventListener('click', event => {
    const movieId = event.target.offsetParent.id || '0';
    if (movieId === '0') return;
    toggleModal(movieId);
  });

  async function loadPage() {
    await displayMovies(currentPage);
    resizePaginator();
  }

  async function searchMovies(currentPage) {
    let data = await fetchSimilarMovies('sea', currentPage).then(data => {
      return data;
    });
    sameMovies = data.results;
    totalPages = data.total_pages;
  }

  async function displayMovies(currentPage) {
    await searchMovies(currentPage);
    const moviesContainer = document.querySelector('.movies');
    moviesContainer.innerHTML = '';
    let moviesList = '';
    sameMovies.forEach(movie => {
      const img = movie.poster_path
        ? `<img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" width="150px">`
        : `<img src="https://img.freepik.com/free-vector/flat-design-no-photo-sign_23-2149299706.jpg?t=st=1709528382~exp=1709531982~hmac=0bf6298109913f1b5659dfda880651f4b320452f476ddccdb5bd374a27f56044&w=826" title="Image by freepik" width="150px">`;

      moviesList += `<div><span>${movie.title}</span>${img}</div>`;
    });
    moviesContainer.innerHTML = moviesList;
  }

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

  loadPage();
});
