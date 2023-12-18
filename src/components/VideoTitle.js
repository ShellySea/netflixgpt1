import React from "react";

const VideoTitle = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default VideoTitle;
