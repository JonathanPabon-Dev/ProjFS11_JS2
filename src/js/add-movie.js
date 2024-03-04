import Notiflix from 'notiflix';

export function addToWatched(movieId) {
  let watchedList = JSON.parse(localStorage.getItem('watchedList')) || [];
  if (!watchedList.includes(movieId)) {
    watchedList.push(movieId);
    localStorage.setItem('watchedList', JSON.stringify(watchedList));
    Notiflix.Notify.success('Película agregada a la lista de espera');
  } else {
    Notiflix.Notify.warning('Esta película ya está en la lista de espera');
  }
}

export function addToQueue(movieId) {
  let queueList = JSON.parse(localStorage.getItem('queueList')) || [];
  if (!queueList.includes(movieId)) {
    queueList.push(movieId);
    localStorage.setItem('queueList', JSON.stringify(queueList));
    Notiflix.Notify.success('Película agregada a la lista de espera');
  } else {
    Notiflix.Notify.warning('Esta película ya está en la lista de espera');
  }
}
