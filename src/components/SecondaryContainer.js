import React from "react";
import Movielist from "./Movielist";
import { useSelector } from "react-redux";

function SecondaryContainer() {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upComingMovies = useSelector((state) => state.movies?.upComingMovies);

  return (
    <div className=" bg-black">
      <div className="mt-0 md:-mt-72 pl-2 md:pl-12 relative z-20">
        <Movielist genre={"Now Playing"} movies={nowPlayingMovies} />
        <Movielist genre={"Top Rated"} movies={topRatedMovies} />
        <Movielist genre={"Popular"} movies={popularMovies} />
        <Movielist genre={"UpComing"} movies={upComingMovies} />
        <Movielist genre={"Comedy"} movies={nowPlayingMovies} />
      </div>
    </div>
  );
}

export default SecondaryContainer;
