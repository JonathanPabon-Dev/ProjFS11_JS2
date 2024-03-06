const loader = document.querySelector('.loader');
const movies = document.querySelector('.movies');

export function showLoader() {
  loader.classList.remove('is-hidden');
  movies.classList.add('is-hidden');
}

export function hideLoader() {
  loader.classList.add('is-hidden');
  movies.classList.remove('is-hidden');
}
