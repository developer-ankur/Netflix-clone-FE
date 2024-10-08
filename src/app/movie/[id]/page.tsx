
import { useRouter } from 'next/router';

export default function MovieDetail() {
  const { query } = useRouter();
  const movieId = query.id;

  // Fetch the movie details here using the movieId

  return <div>Movie Details for {movieId}</div>;
}
