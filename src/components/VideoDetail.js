import React from "react";

// instead of props.video just do video
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading ...</div>;
  }
  return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
