import axios from 'axios';

const ACCESS_TOKEN = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${ACCESS_TOKEN}`,
    'accept': 'application/json'
  }
});

export const getPopularMovies = async (page = 1) => {
  try {
    const response = await api.get('/movie/popular', {
      params: {
        language: 'en-US',
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

export const searchMovies = async (query, page = 1) => {
  try {
    const response = await api.get('/search/movie', {
      params: {
        query,
        language: 'en-US',
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
}; 