import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieKey) => {
  const dispatch = useDispatch();

  const movieTrailer = useSelector((store) => store.movies.trailer);

  // fetch trailer - make api => requires movieID and updating the store
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieKey + "/videos",
      API_OPTIONS
    );
    const json = await data.json();
    const filteredData = json.results.filter((data) => data.type === "Trailer");
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    // setTrailerID(trailer.key);
    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    !movieTrailer && getMovieVideo();
  }, []);
};

export default useMovieTrailer;
