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

export async function fetchTrendMovies() {
  try {
    return await fetch(BASE_URL + 'trending/movie/day?language=en-US', options)
      .then(response => response.json())
      .catch(err => console.error(err));
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchSimilarMovies(q, page = 1) {
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

export async function fetchGenres() {
  try {
    return fetch(BASE_URL + 'genre/movie/list', options)
      .then(response => response.json())
      .catch(err => console.error(err));
  } catch (error) {
    console.log(error);
    return [];
  }
}
