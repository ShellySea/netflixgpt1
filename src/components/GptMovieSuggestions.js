import React from "react";
import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector(
    (state) => state?.gpt?.searchedResults
  );

  if (!movieNames) return null;

  return (
    <>
      {movieNames.length !== 0 && (
        <div className="p-4 m-4 bg-black text-white bg-opacity-90">
          <div>
            {movieNames.map((movieName, index) => (
              <Movielist
                key={movieName}
                genre={movieName}
                movies={movieResults[index]}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default GptMovieSuggestions;
