import { fetchMovieDetails } from './api';
import { addToWatched, addToQueue } from './add-movie';

class movieObject {
  constructor(
    poster,
    movietitle,
    vote,
    votes,
    ogTitle,
    popularity,
    sinopsis,
    genre
  ) {
    this.poster = poster;
    this.movieTitle = movietitle;
    this.vote = vote;
    this.votes = votes;
    this.ogTitle = ogTitle;
    this.popularity = popularity;
    this.sinopsis = sinopsis;
    this.genre = genre;
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
      refs.movie = new movieObject(
        `https://image.tmdb.org/t/p/w400${response.poster_path}`,
        response.title,
        response.vote_average,
        response.vote_count,
        response.original_title,
        response.popularity,
        response.overview,
        response.genres.map(({ name }) => name)
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
  refs.btnWatched.removeEventListener('click', refs.addIdToWatched);
  refs.btnQueued.removeEventListener('click', refs.addIdToQueue);
}
