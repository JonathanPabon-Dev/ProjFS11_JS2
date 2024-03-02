import { fetchAllMovies, fetchSameMovies, fetchMovieDetails } from './api.js';

fetchAllMovies().then(data => console.log(data));
fetchSameMovies('tears', 1);
fetchMovieDetails(1217605);
