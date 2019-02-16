import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  //destructuring props=> {videos}

  const renderedList = videos.map((video, i) => {
    //props.videos => videos
    return (
      <React.Fragment>
        <VideoItem
          video={video}
          key={video.id.videoId}
          onVideoSelect={onVideoSelect}
        />
        {i < 4 ? <hr /> : null}
      </React.Fragment>
    );
  });
  return <div className="video-list">{renderedList}</div>;
};

export default VideoList;
