import React, { Component } from "react";
import backgroundVideo from "../assets/videos/background.mp4";

class VideoBg extends Component { 
  render() {
    return (
      <div className="video-bg">
        <video autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default VideoBg;