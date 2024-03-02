import { fetchMovieDetails } from './api';

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
};

refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);
window.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    removeModal();
  }
});

export function toggleModal(id) {
  refs.modal.classList.toggle('is-hidden');
  fetchMovieDetails(id)
    .then(response => {
      console.log(response.genres.map(({ name }) => name));
      refs.poster.src =
        `https://image.tmdb.org/t/p/w400${response.poster_path}` || 'none';
      refs.vote.textContent = response.vote_average || 'none';
      refs.votes.textContent = response.vote_count || 'none';
      refs.ogTitle.textContent = response.original_title || 'none';
      refs.popularity.textContent = response.popularity || 'none';
      refs.movieTitle.textContent = response.title || 'none';
      refs.sinopsis.textContent = response.overview || 'none';
      refs.genre.textContent = response.genres.map(({ name }) => name);
    })
    .catch(error => {
      console.error(error);
    });
}
export function removeModal() {
  refs.modal.classList.add('is-hidden');
}
/* 
  poster_path: es el codigo de la imagen de poster
  enlace para llamar imagen https://image.tmdb.org/t/p/original/${poster_path}
  */
