import Notiflix from 'notiflix';

export function addToWatched(movieId) {
  let watchedList = getWatchedList();
  if (!watchedList.includes(movieId)) {
    watchedList.push(movieId);
    localStorage.setItem('watchedList', JSON.stringify(watchedList));
    Notiflix.Notify.success('Película agregada a la lista de espera');
  } else {
    Notiflix.Notify.warning('Esta película ya está en la lista de espera');
  }
  console.log(watchedList);
}

export function addToQueue(movieId) {
  let queueList = getQueueList();
  if (!queueList.includes(movieId)) {
    queueList.push(movieId);
    localStorage.setItem('queueList', JSON.stringify(queueList));
    Notiflix.Notify.success('Película agregada a la lista de espera');
  } else {
    Notiflix.Notify.warning('Esta película ya está en la lista de espera');
  }
}

export function getWatchedList() {
  return JSON.parse(localStorage.getItem('watchedList')) || [];
}

export function getQueueList() {
  return JSON.parse(localStorage.getItem('queueList')) || [];
}
