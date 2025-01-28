import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  //getting data from store
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black relative z-20 px-12">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending Movies"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Upcoming Movie"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Horror Movie"} movies={movies.nowPlayingMovies} />

        <MovieList title={"Popular Movies"} movies={movies.nowPlayingMovies} />
      </div>
    )
  );
};

export default SecondaryContainer;
