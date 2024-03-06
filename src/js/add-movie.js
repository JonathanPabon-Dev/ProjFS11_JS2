import Notiflix from 'notiflix';
import {
  createMovie,
  getMovies,
  getMoviesQueued,
  getMoviesWatched,
} from './firebase';

export async function addToWatched(movie) {
  let moviesArray = [];
  const movies = await getMoviesWatched();
  movies.forEach(doc => moviesArray.push(doc.data().id));
  const findMovie = moviesArray.find(id => id === movie.id) || null;
  if (findMovie === null) {
    createMovie(movie, 1);
    Notiflix.Notify.success('Movie added to watched list');
  } else {
    Notiflix.Notify.warning('Movie is already in the watched list');
  }
}

export async function addToQueue(movie) {
  let moviesArray = [];
  const movies = await getMoviesQueued();
  movies.forEach(doc => moviesArray.push(doc.data().id));
  const findMovie = moviesArray.find(id => id === movie.id) || null;
  if (findMovie === null) {
    createMovie(movie, 0);
    Notiflix.Notify.success('Movie added to queue list');
  } else {
    Notiflix.Notify.warning('Movie is already in the queue list');
  }
}

export function getWatchedList() {
  return JSON.parse(localStorage.getItem('watchedList')) || [];
}

export function getQueueList() {
  return JSON.parse(localStorage.getItem('queueList')) || [];
}
