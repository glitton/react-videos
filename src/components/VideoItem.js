import React from "react";

const VideoItem = ({ video }) => {
  // console.log({ video });
  const { thumbnails, description, title } = video.snippet;
  return (
    <div>
      <img src={thumbnails.medium.url} alt={description} />
      {title}
    </div>
  );
};

export default VideoItem;
