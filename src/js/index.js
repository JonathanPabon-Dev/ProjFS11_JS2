import { fetchAllMovies, fetchSameMovies, fetchMovieDetails } from './api.js';
import { removeModal, toggleModal } from './modal-info.js';

const galleryList = document.getElementById('gallery-list');
const firstModal = document.querySelector('li[first-modal]');

fetchAllMovies().then(data => {
  firstModal.classList.add('is-hidden');
  data.results.forEach(element => {
    const genres = element.genre_ids.map(name => name).join(', ');
    galleryList.innerHTML += `
    <li class="gallery__item">
        <div class="gallery__container"  id=${element.id} data-modal-open="">
            <img
                class="gallery__img"
                src="https://image.tmdb.org/t/p/original${element.poster_path}"
                alt="${element.media_type}"
            />
            </div>
                <div class="gallery__description">
                <h3 class="gallery__title" style="font-style:uppercase">${
                  element.title
                }</h3>
                <p class="gallery__subtitle">${genres} | ${element.release_date.slice(
      0,
      4
    )}</p>
            </div>
        </div>
    </li>`;
  });
});

galleryList.addEventListener('click', event => {
  const id = event.target.offsetParent.id || 0;
  if (id === 0) return;
  toggleModal(id);
});
/*fetchSameMovies('tears', 1);
fetchMovieDetails(1217605);
*/
