import Notiflix from 'notiflix';
import {
  createMovie,
  getMoviesQueued,
  getMoviesWatched,
  getMoviesWatchedById,
  getMoviesQueuedById,
  deleteMovieWatched,
  deleteMovieQueued,
} from './firebase';
import { loadWatchedMovies, loadQueueMovies } from './movies';
import { removeModal } from './modal-info';
import { renderLibraryHeader, getIndexData } from './index';

export async function addToWatched(movie) {
  let moviesArray = [];
  try {
    const movies = await getMoviesWatched();
    movies.forEach(doc => moviesArray.push(doc.data().id));
    const findMovie = moviesArray.find(id => id === movie.id) || null;
    if (findMovie === null) {
      createMovie(movie, 1);
      Notiflix.Notify.success('Movie added to watched list');
      removeModal();
    } else {
      let docId = null;
      const singleMovie = await getMoviesWatchedById(movie.id);
      singleMovie.forEach(doc => {
        docId = doc.id;
      });
      deleteMovieWatched(docId);
      setTimeout(() => {
        removeModal();
        renderLibraryHeader();
        loadWatchedMovies(
          getIndexData().currentPage,
          getIndexData().moviesPerPage
        );
      }, 500);
      Notiflix.Notify.success('Movie removed from watched list');
    }
  } catch (error) {
    Notiflix.Notify.failure('Action denied. ' + error);
  }
}

export async function addToQueue(movie) {
  try {
    let moviesArray = [];
    const movies = await getMoviesQueued();
    movies.forEach(doc => moviesArray.push(doc.data().id));
    const findMovie = moviesArray.find(id => id === movie.id) || null;
    if (findMovie === null) {
      createMovie(movie, 0);
      Notiflix.Notify.success('Movie added to queue list');
      removeModal();
    } else {
      let docId = null;
      const singleMovie = await getMoviesQueuedById(movie.id);
      singleMovie.forEach(doc => {
        docId = doc.id;
      });
      deleteMovieQueued(docId);
      Notiflix.Notify.success('Movie removed from queued list');
      setTimeout(() => {
        removeModal();
        renderLibraryHeader(1);
        loadQueueMovies(
          getIndexData().currentPage,
          getIndexData().moviesPerPage
        );
      }, 500);
    }
  } catch (error) {
    Notiflix.Notify.failure('Action denied. ' + error);
  }
}

export function getWatchedList() {
  return JSON.parse(localStorage.getItem('watchedList')) || [];
}

export function getQueueList() {
  return JSON.parse(localStorage.getItem('queueList')) || [];
}
