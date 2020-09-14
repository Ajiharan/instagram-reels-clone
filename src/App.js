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
          src="https://firebasestorage.googleapis.com/v0/b/instagram-reels-clone-dd86e.appspot.com/o/images%2F%E2%80%94Pngtree%E2%80%94instagram%20logo%20social%20media%20instagram_3572487.png?alt=media&token=0ee78c66-f5d0-4861-a6d2-fc2361d0290a"
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
            url="https://instagram.fcmb10-1.fna.fbcdn.net/v/t50.2886-16/116883084_334122384286007_1401210482154269416_n.mp4?_nc_ht=instagram.fcmb10-1.fna.fbcdn.net&amp;_nc_cat=111&amp;_nc_ohc=utdzcL3l0EkAX9gVui2&amp;oe=5F61CE66&amp;oh=ce24f5fe1f52f5c3afc76ff7e17b224e"
            like={data.like}
            shares={data.shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
