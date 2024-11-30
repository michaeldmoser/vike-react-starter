import React from 'react';
import { useData } from 'vike-react/useData';
import type { Data } from './+data.js';
import { MovieList } from '@/features/movies/MovieList';

export default function Page() {
  const movies = useData<Data>();
  return <MovieList movies={movies} detailsPrefix="/star-wars/" />;
}
