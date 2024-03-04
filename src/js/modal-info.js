import { fetchMovieDetails } from './api';
import { addToWatched, addToQueue } from './add-movie';

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  movieTitle: document.querySelector('#movie-title'),
  vote: document.querySelector('#vote'),
  votes: document.querySelector('#votes'),
  popularity: document.querySelector('#popularity'),
  ogTitle: document.querySelector('#og-title'),
  genre: document.querySelector('#genre'),
  sinopsis: document.querySelector('#sinopsis'),
  poster: document.querySelector('#poster'),
  btnWatched: document.querySelector('#watched-list'),
  btnQueued: document.querySelector('#queue-list'),
  addIdToWatched: event => {
    addToWatched(event.target.value);
  },
  addIdToQueue: event => {
    addToQueue(event.target.value);
  },
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', removeModal);

window.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    removeModal();
  }
});

export function toggleModal(id) {
  refs.modal.classList.toggle('is-hidden');
  fetchMovieDetails(id)
    .then(response => {
      refs.poster.src =
        `https://image.tmdb.org/t/p/w400${response.poster_path}` ||
        '../images/not-found.jpg';
      refs.vote.textContent = response.vote_average || 'none';
      refs.votes.textContent = response.vote_count || 'none';
      refs.ogTitle.textContent = response.original_title || 'none';
      refs.popularity.textContent = response.popularity || 'none';
      refs.movieTitle.textContent = response.title || 'none';
      refs.sinopsis.textContent = response.overview || 'none';
      refs.genre.textContent =
        response.genres.map(({ name }) => name).length > 0
          ? response.genres.map(({ name }) => name).join(', ')
          : 'none';
      refs.btnWatched.value = response.id;
      refs.btnQueued.value = response.id;
    })
    .catch(error => console.log(error));

  refs.btnWatched.addEventListener('click', refs.addIdToWatched);

  refs.btnQueued.addEventListener('click', refs.addIdToQueue);
}
refs.modal.addEventListener('click', event => {
  if (event.target.className !== 'backdrop') return;
  removeModal();
});
export function removeModal() {
  refs.modal.classList.add('is-hidden');
  refs.btnWatched.removeEventListener('click', refs.addIdToWatched);
  refs.btnQueued.removeEventListener('click', refs.addIdToQueue);
}
