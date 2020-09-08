import React from "react";
import "./VideoFooter.css";
import { Button, Avatar } from "@material-ui/core";
const VideoFooter = ({ channel, like, avatarSrc, shares, song }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar alt="my profile_image" src={avatarSrc} />
        <h3>
          {channel} .<Button>Follow</Button>
        </h3>
      </div>
    </div>
  );
};

export default VideoFooter;
