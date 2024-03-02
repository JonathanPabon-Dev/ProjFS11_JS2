const API_KEY = '552adb2d24e642063babc241656f1191';
const API_ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTJhZGIyZDI0ZTY0MjA2M2JhYmMyNDE2NTZmMTE5MSIsInN1YiI6IjY1ZGQ0ZDVlZGNiNmEzMDE4NTg1YjBkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ltWwgOGVxJr4cJ0XudTwZnS_NTOZbUx4iZEkiQDdqbs';

const BASE_URL = 'https://api.themoviedb.org/3/';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_ACCESS_TOKEN}`,
  },
};

export async function fetchAllMovies() {
  try {
    return await fetch(BASE_URL + 'trending/all/day?language=en-US', options)
      .then(response => response.json())
      .catch(err => console.error(err));
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchSameMovies(q, page) {
  try {
    let params = new URLSearchParams({
      query: q,
      page: page,
    });
    return await fetch(BASE_URL + 'search/movie?' + params, options)
      .then(response => response.json())
      .catch(err => console.error(err));
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchMovieDetails(id) {
  try {
    return await fetch(BASE_URL + 'movie/' + id, options)
      .then(response => response.json())
      .catch(err => console.error(err));
  } catch (error) {
    console.log(error);
    return [];
  }
}
