import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div> Loading...</div>;
  }
  return (
    <div className="video-details">
      <h2>{video.snippet.title}</h2>
      <iframe
        title="video player"
        id="ytplayer"
        type="text/html"
        src={`http://www.youtube.com/embed/${video.id.videoId}`}
        frameBorder="0"
      />
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
