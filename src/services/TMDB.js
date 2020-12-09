import axios from 'axios';

const AXIOS = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'a4b311a4af0456b18de9111800fddea7',
    language: 'en-US',
  },
});

// https://developers.themoviedb.org/3/trending/get-trending - https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

// https://developers.themoviedb.org/3/search/search-movies - https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

// https://developers.themoviedb.org/3/movies/get-movie-details - https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
// https://developers.themoviedb.org/3/movies/get-movie-credits - https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
// https://developers.themoviedb.org/3/movies/get-movie-reviews - https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

async function getTrending(page = 1) {
  const response = await AXIOS.get(`trending/all/day?page=${page}`);
  const { data } = response;
  return data;
}

async function searchMovies(query, page = 1) {
  const response = await AXIOS.get(`search/movie?query=${query}&page=${page}`);
  const { data } = response;
  return data;
}

async function getMovieDetails(id) {
  const response = await AXIOS.get(`movie/${id}`);
  const { data } = response;
  return data;
}

async function getMovieCredits(id) {
  const response = await AXIOS.get(`movie/${id}/credits`);
  const { data } = response;
  return data;
}

async function getMovieReviews(id, page = 1) {
  const response = await AXIOS.get(`movie/${id}/reviews?page=${page}`);
  const { data } = response;
  return data;
}

export default {
  getTrending,
  searchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
