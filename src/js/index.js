import { fetchAllMovies, fetchSameMovies, fetchMovieDetails } from './api.js';
import { removeModal, toggleModal } from './modal-info.js';

const galleryList = document.getElementById('gallery-list');
const firstModal = document.querySelector('li[first-modal]');

fetchAllMovies().then(data => {
  console.log(data.results);
  firstModal.classList.add('is-hidden');
  data.results.forEach(element => {
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
                <h3 class="gallery__title" style="font-style:uppercase">${element.title}</h3>
                <p class="gallery__subtitle">${element.genre_ids} | </p>
            </div>
        </div>
    </li>`;
  });
});

galleryList.addEventListener('click', event => {
  toggleModal(event.target.offsetParent.id);
});
/*fetchSameMovies('tears', 1);
fetchMovieDetails(1217605);
*/
