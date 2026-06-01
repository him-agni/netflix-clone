import { Movie, MovieListProps } from "../types.ts";

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div>
      <ul>
        {movies.map((movie: Movie) => (
          <li key={movie.id}>{movie.original_title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
