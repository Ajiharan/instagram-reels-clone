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
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default App;
