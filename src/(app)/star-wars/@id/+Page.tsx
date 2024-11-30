import React from 'react';
import { useData } from 'vike-react/useData';
import type { Data } from './+data.js';
import { Movie } from '@/features/movies/Movie';

export default function Page() {
  const movie = useData<Data>();
  return <Movie {...movie} />;
}
