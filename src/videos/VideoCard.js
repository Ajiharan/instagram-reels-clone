import React, { useState, useRef } from "react";
import "./VideoCard.css";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";

const VideoCard = ({ url, like, shares, channel, avatarSrc, song }) => {
  const videoRef = useRef(null);
  const [isVideoPlaying, setisVideoPlaying] = useState(false);
  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setisVideoPlaying(false);
    } else {
      videoRef.current.play();
      setisVideoPlaying(true);
    }
  };
  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        src={url}
        alt="ig reel video"
        loop
      />
      <VideoFooter
        channel={channel}
        avatarSrc={avatarSrc}
        song={song}
        like={like}
        shares={shares}
      />
    </div>
  );
};

export default VideoCard;
