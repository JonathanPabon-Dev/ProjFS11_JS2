import { fetchMovieDetails } from './api';
import { addToWatched, addToQueue } from './add-movie';

class movieObject {
  constructor(
    id,
    poster_path,
    title,
    vote_average,
    vote_count,
    original_title,
    popularity,
    overview,
    genre_ids,
    release_date
  ) {
    this.id = id;
    this.poster_path = poster_path;
    this.title = title;
    this.vote_average = vote_average;
    this.vote_count = vote_count;
    this.original_title = original_title;
    this.popularity = popularity;
    this.overview = overview;
    this.genre_ids = genre_ids;
    this.release_date = release_date;
  }
}

const refs = {
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
  movie: '',
  addIdToWatched: () => {
    addToWatched(refs.movie);
  },
  addIdToQueue: () => {
    addToQueue(refs.movie);
  },
};

refs.closeModalBtn.addEventListener('click', removeModal);

window.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    removeModal();
  }
});

export function toggleModal(id) {
  refs.modal.classList.remove('is-hidden');
  refs.modal.classList.add('flex-modal');

  fetchMovieDetails(id)
    .then(response => {
      if (response.poster_path !== null) {
        refs.poster.src = `https://image.tmdb.org/t/p/w400${response.poster_path}`;
      } else {
        refs.poster.src = new URL('../images/not-found.jpg', import.meta.url);
      }
      refs.vote.textContent = response.vote_average.toFixed(1) || 'None';
      refs.votes.textContent = response.vote_count || 'None';
      refs.ogTitle.textContent = response.original_title || 'None';
      refs.popularity.textContent = response.popularity.toFixed(1) || 'None';
      refs.movieTitle.textContent = response.title || 'None';
      refs.sinopsis.textContent = response.overview || 'None';
      refs.genre.textContent =
        response.genres.map(({ name }) => name).length > 0
          ? response.genres.map(({ name }) => name).join(', ')
          : 'None';
      refs.btnWatched.value = response.id;
      refs.btnQueued.value = response.id;
      refs.movie = new movieObject(
        id,
        `https://image.tmdb.org/t/p/w400${response.poster_path}`,
        response.title,
        response.vote_average,
        response.vote_count,
        response.original_title,
        response.popularity,
        response.overview,
        response.genres.map(({ id }) => id),
        response.release_date
      );
    })
    .catch(error => console.log(error));

  refs.btnWatched.addEventListener('click', refs.addIdToWatched);

  refs.btnQueued.addEventListener('click', refs.addIdToQueue);
}
refs.modal.addEventListener('click', event => {
  if (event.target.className !== 'backdrop flex-modal') return;
  removeModal();
});

export function removeModal() {
  refs.modal.classList.add('is-hidden');
  refs.modal.classList.remove('flex-modal');
  refs.poster.src = new URL('../images/not-found.jpg', import.meta.url);
  refs.vote.textContent = 'none';
  refs.votes.textContent = 'none';
  refs.ogTitle.textContent = 'none';
  refs.popularity.textContent = 'none';
  refs.movieTitle.textContent = 'none';
  refs.sinopsis.textContent = 'none';
  refs.genre.textContent = 'none';
  refs.btnWatched.removeEventListener('click', refs.addIdToWatched);
  refs.btnQueued.removeEventListener('click', refs.addIdToQueue);
}
