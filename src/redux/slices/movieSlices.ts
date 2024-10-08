
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../types/movie';

interface MovieState {
  movies: Movie[];
}

const initialState: MovieState = {
  movies: [],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<Movie[]>) {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = movieSlice.actions;
export default movieSlice.reducer;
