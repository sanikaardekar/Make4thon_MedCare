import "./Meditation.css";
import Sound from "react-sound";
import audio from "./voice.mp3";

import React from "react";

const OpeningMsg = () => {
  return (
    <div className="message">
      <Sound url={audio} playStatus={Sound.status.PLAYING} />
      Play a song, Set the timer and Relax!
    </div>
  );
};

export default OpeningMsg;
