import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = (props) => {
  const { poster_path, title } = props;
  return (
    <div>
      <div className="box-border h-auto p-4 w-48">
        <img alt={title} src={IMG_CDN_URL + poster_path} />
      </div>
    </div>
  );
};

export default MovieCard;
