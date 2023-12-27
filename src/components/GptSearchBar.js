import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
// import openai from "../utils/openAI";

const GptSearchBar = () => {
  const searchText = useRef(null);

  const languageKey = useSelector((state) => state.language.lang);

  const handleGPTSearchClick = async () => {
    let searchTerm = searchText.current.value;

    console.log(searchText.current.value);

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchTerm +
      ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Welcome, Shole, Don and Koi mil gaya";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    // console.log(gptResults.choices);

    /* Hard coding GPT Results since call for free GPT apis have been exhausted */
    const gptResults = [
      {
        index: 0,
        message: {
          content: "Andaaz Apna Apna, Hera Pheri, Padosan, Welcome, Golmal",
        },
      },
    ];
  };

  return (
    <div className="p-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder={lang[languageKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 button rounded-lg py-2 px-4 bg-red-700 text-white hover:bg-red-600"
          onClick={handleGPTSearchClick}
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
