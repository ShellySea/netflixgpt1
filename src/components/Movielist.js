import React from "react";
import MovieCard from "./MovieCard";

const Movielist = (props) => {
  const { genre, movies } = props;
  return (
    <div className="overflow-x-scroll scrollbar-hide">
      <h1 className="text-xl font-bold px-4 py-1 text-white">{genre}</h1>
      <div className="flex">
        {movies?.map((data) => (
          <MovieCard
            key={data.id}
            poster_path={data.poster_path}
            title={data.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Movielist;
