import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = (props) => {
  const { poster_path, title } = props;
  let poster_path1 = poster_path;
  if (!poster_path1) {
    poster_path1 =
      "https://t3.ftcdn.net/jpg/02/60/23/00/360_F_260230066_wh6SrBLnGJ5sYvGhM1XlX2eDADYaEZF1.jpg";
  }
  return (
    <div>
      <div className="box-border h-auto p-4 w-48 hover:scale-110 transition duration-500 cursor-pointer">
        <img
          alt={title}
          src={poster_path ? IMG_CDN_URL + poster_path : poster_path1}
        />
      </div>
    </div>
  );
};

export default MovieCard;
