import { fetchAllMovies } from './api.js';
import { toggleModal } from './modal-info.js';

const galleryList = document.getElementById('gallery-list');
const firstModal = document.querySelector('li[first-modal]');

fetchAllMovies().then(data => {
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
