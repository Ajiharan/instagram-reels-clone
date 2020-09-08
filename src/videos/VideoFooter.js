import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import { Button, Avatar } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SendIcon from "@material-ui/icons/Send";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import ShareIcon from "@material-ui/icons/Share";
import Ticker from "react-ticker";
const VideoFooter = ({ channel, like, avatarSrc, shares, song }) => {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar alt="my profile_image" src={avatarSrc} />
        <h3>
          {channel} .<Button>Follow</Button>
        </h3>
      </div>
      <div className="videoFooter__ticker">
        <MusicNoteIcon className="videoFooter__icon" />
        <Ticker mode="await">
          {({ index }) => (
            <>
              <h1>{song}</h1>
            </>
          )}
        </Ticker>
      </div>
      <div className="videoFooter__actions">
        <div className="videoFooter__actionsleft">
          <FavoriteIcon />
          <ChatBubbleIcon />
          <SendIcon />
          <MoreHorizIcon />
        </div>
        <div className="videoFooter__actionsright">
          <div className="videoFooter__stat">
            <FavoriteIcon />
            <p>{like}</p>
          </div>
          <div className="videoFooter__stat">
            <ShareIcon />
            <p>{shares}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoFooter;
