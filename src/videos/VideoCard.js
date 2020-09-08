import React, { useState, useRef } from "react";
import "./VideoCard.css";
import VideoHeader from "./VideoHeader";

const VideoCard = () => {
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
        src="https://instagram.fcmb3-1.fna.fbcdn.net/v/t50.2886-16/104496795_291458192166404_8886527035780256674_n.mp4?_nc_ht=instagram.fcmb3-1.fna.fbcdn.net&amp;_nc_cat=108&amp;_nc_ohc=vlAdLe9FEkkAX8qznyN&amp;oe=5F59CB54&amp;oh=45918901008e25ced479ba6976210b7d"
        alt="ig reel video"
        loop
      />
    </div>
  );
};

export default VideoCard;
