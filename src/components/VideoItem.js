import "./VideoItem.css";
import React from "react";
// es6 destructuring of props instead of props.video
// just video like {video}
const VideoItem = ({ video, onVideoSelect }) => {
  // console.log({ video });
  const { thumbnails, title } = video.snippet;
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img className="ui image" src={thumbnails.medium.url} alt={title} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
