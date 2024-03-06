import Notiflix from 'notiflix';

export function addToWatched(movie) {
  const watchedList = getWatchedList();
  const findMovie =
    watchedList.map(movie => movie).find(({ id }) => id === movie.id) || null;
  if (findMovie === null) {
    watchedList.push(movie);
    localStorage.setItem('watchedList', JSON.stringify(watchedList));
    Notiflix.Notify.success('Movie added to watched list');
  } else {
    Notiflix.Notify.warning('Movie is already in the watched list');
  }
}

export function addToQueue(movie) {
  const queueList = getQueueList();
  const findMovie =
    queueList.map(movie => movie).find(({ id }) => id === movie.id) || null;
  if (findMovie === null) {
    queueList.push(movie);
    localStorage.setItem('queueList', JSON.stringify(queueList));
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
