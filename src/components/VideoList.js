import React from "react";
import VideoItem from "./VideoItem";
// es6 destructure
// instead of props.videos do {videos}
const VideoList = ({ videos }) => {
  const renderedList = videos.map(video => {
    return <VideoItem video={video} />;
  });
  return <div>{renderedList}</div>;
};

export default VideoList;
