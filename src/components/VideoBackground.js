import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlice";

const VideoBackground = (props) => {
  const { movieId } = props;
  const dispatch = useDispatch();

  // const [trailerID, setTrailerID] = useState(null);
  const trailer = useSelector((store) => store.movies?.trailer);
  console.log(trailer);
  // fetch trailer - make api => requires movieID

  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/466420/videos",
      API_OPTIONS
    );
    const json = await data.json();
    const filteredData = json.results.filter((data) => data.type === "Trailer");
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    console.log(trailer);
    // setTrailerID(trailer.key);
    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?si=je4v2QakKMMkjFeY"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
