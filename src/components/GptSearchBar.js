import React, { useState } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const [input, setInput] = useState("");

  const languageKey = useSelector((state) => state.language.lang);

  const handleGPTSearchClick = () => {
    console.log(input);
  };

  return (
    <div className="p-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          value={input}
          className="p-4 m-4 col-span-9 shadow appearance-none border rounded text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder={lang[languageKey].gptSearchPlaceholder}
          onInput={(e) => setInput(e.target.value)}
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
