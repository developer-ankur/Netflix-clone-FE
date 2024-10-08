"use client"
import { useEffect, useState } from 'react';
import { fetchMovies } from '../utils/api';
import { Movie } from '../types/movie';

export const useFetchMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovies().then(setMovies);
  }, []);

  return movies;
};