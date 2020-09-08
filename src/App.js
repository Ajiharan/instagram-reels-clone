import React, { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase";
import VideoCard from "./videos/VideoCard";
function App() {
  const [videoCards, setVideoCards] = useState([]);
  useEffect(() => {
    db.collection("reels").onSnapshot((snapshot) => {
      setVideoCards(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
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
        {videoCards.map((data, i) => (
          <VideoCard
            key={i}
            channel={data.channel}
            avatarSrc={data.avatarSrc}
            song={data.song}
            url="https://instagram.fcmb3-1.fna.fbcdn.net/v/t50.2886-16/118726380_989202731527408_2826746828715567401_n.mp4?_nc_ht=instagram.fcmb3-1.fna.fbcdn.net&amp;_nc_cat=104&amp;_nc_ohc=xoHhH1tidPMAX_GswEe&amp;oe=5F5998D7&amp;oh=2be4982577f612cf6de5cba2cafe4c99"
            like={data.like}
            shares={data.shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
