import type { Movie, MovieDetails } from './types';

export function Movie({ title, director, release_date, producer }: Movie & MovieDetails) {
  return (
    <>
      <h1>{title}</h1>
      Release Date: {release_date}
      <br />
      Director: {director}
      <br />
      Producer: {producer}
    </>
  );
}
