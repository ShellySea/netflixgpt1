import React from "react";

const VideoTitle = (props) => {
  const { title, description } = props;
  return (
    <div className="px-6 md:px-24 w-screen aspect-video pt-[10%] absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 w-1/4 text-sm">{description}</p>
      <div>
        <button className="bg-white text-black my-4 py-2 md:py-4 px-2 md:px-12 text-xl rounded-lg hover:opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
