import React from "react";
import { useSelector } from "react-redux";

const GptMovieSuggestions = () => {
  const searchedResults = useSelector((state) => state?.gpt?.searchedResults);

  console.log(searchedResults);
  return <div>GptMovieSuggestions</div>;
};

export default GptMovieSuggestions;
