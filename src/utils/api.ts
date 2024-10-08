import axios from 'axios';
import { Movie } from '../types/movie';

export const fetchMovies = async (): Promise<Movie[]> => {
  const response = await axios.get('/api/movies');
  return response.data;
};
