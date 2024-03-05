import { fetchTrendMovies } from './api.js';
import { toggleModal } from './modal-info.js';

const galleryList = document.getElementById('gallery-list');
const firstModal = document.querySelector('li[first-modal]');

firstModal.classList.add('is-hidden');

galleryList.addEventListener('click', event => {
  const movieId = event.target.offsetParent.id || '0';
  if (movieId === '0') return;
  toggleModal(movieId);
});

