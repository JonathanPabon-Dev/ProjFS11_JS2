import Notiflix from 'notiflix';

export function addToWatched(movieId) {
  let watchedList = getWatchedList();
  if (!watchedList.includes(movieId)) {
    watchedList.push(movieId);
    localStorage.setItem('watchedList', JSON.stringify(watchedList));
    Notiflix.Notify.success('Movie added to watched list');
  } else {
    Notiflix.Notify.warning('Movie is already in the watched list');
  }
}

export function addToQueue(movieId) {
  let queueList = getQueueList();
  if (!queueList.includes(movieId)) {
    queueList.push(movieId);
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
