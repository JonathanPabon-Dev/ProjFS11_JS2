import Notiflix from 'notiflix';

export function addToWatched(movie) {
  let watchedList = getWatchedList();
  if (!watchedList.includes(movie)) {
    watchedList.push(movie);
    localStorage.setItem('watchedList', JSON.stringify(watchedList));
    Notiflix.Notify.success('Movie added to watched list');
  } else {
    Notiflix.Notify.warning('Movie is already in the watched list');
  }
}

export function addToQueue(movie) {
  let queueList = getQueueList();
  if (!queueList.includes(movie)) {
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
