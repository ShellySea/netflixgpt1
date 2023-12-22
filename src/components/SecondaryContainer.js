import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  console.log(movies);
  return (
    <div className="bg-black">
      <Movielist genre={"Now Playing"} movies={movies} />
      <Movielist genre={"New Releases"} movies={movies} />
      <Movielist genre={"Romantic"} movies={movies} />
      <Movielist genre={"Horror"} movies={movies} />
      <Movielist genre={"Comedy"} movies={movies} />
    </div>
  );
}

export default SecondaryContainer;
