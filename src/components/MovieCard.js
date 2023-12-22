import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = (props) => {
  console.log("props from card");
  const { key, poster_path, title } = props;
  console.log(key);
  return (
    <div>
      <div className="box-border h-auto p-4 w-48">
        <img alt={title} src={IMG_CDN_URL + poster_path} />
      </div>
    </div>
  );
};

export default MovieCard;
