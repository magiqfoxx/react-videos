import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className="video-item"
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <h3>{video.snippet.title}</h3>
      <img alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoItem;
