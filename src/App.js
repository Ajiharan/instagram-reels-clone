import React from "react";
import "./App.css";
import VideoCard from "./videos/VideoCard";
function App() {
  return (
    <div className="app">
      {/* bem naming convention */}
      <div className="app__top">
        <img
          src="https://www.freepnglogos.com/uploads/download-instagram-png-logo-20.png"
          alt="instagram_logo"
          className="app__logo"
        />
        <h1>Reels</h1>
      </div>
      <div className="app__videos">
        <VideoCard
          channel="React js Community"
          avatarSrc="https://instagram.fcmb3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/104472171_263143091623903_2493365884781888555_n.jpg?_nc_ht=instagram.fcmb3-1.fna.fbcdn.net&amp;_nc_ohc=qlqZPPfgTgMAX85-Eec&amp;oh=15ed560bac09721440f581e85be96114&amp;oe=5F81138C"
          song="community song.."
          url="https://instagram.fcmb3-1.fna.fbcdn.net/v/t50.2886-16/118726380_989202731527408_2826746828715567401_n.mp4?_nc_ht=instagram.fcmb3-1.fna.fbcdn.net&amp;_nc_cat=104&amp;_nc_ohc=xoHhH1tidPMAX_GswEe&amp;oe=5F5998D7&amp;oh=2be4982577f612cf6de5cba2cafe4c99"
          like={100}
          shares={5}
        />
      </div>
    </div>
  );
}

export default App;
