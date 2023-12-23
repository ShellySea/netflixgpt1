import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

function SecondaryContainer() {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);

  return (
    <div className=" bg-black">
      <div className="-mt-72 pl-12 relative z-20">
        <Movielist genre={"Now Playing"} movies={nowPlayingMovies} />
        <Movielist genre={"Top Rated"} movies={topRatedMovies} />
        <Movielist genre={"Popular"} movies={popularMovies} />
        <Movielist genre={"Horror"} movies={nowPlayingMovies} />
        <Movielist genre={"Comedy"} movies={nowPlayingMovies} />
      </div>
    </div>
  );
}

export default SecondaryContainer;
