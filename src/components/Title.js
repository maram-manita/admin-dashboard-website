import React, { useRef } from "react";
import { FaPlay } from "react-icons/fa6";
import "../App.css";

function Title({ purple, word, phonetics }) {
  const mp3Links = phonetics.filter((obj) => obj.audio !== "");
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };
  return (
    <div className="title">
      <div className="title-wrapper">
        <p className="word">{word}</p>
        <p className="phonetics">{phonetics[0] ? phonetics[0].text : ""}</p>
      </div>
      <div
        className="play-btn"
        style={{ backgroundColor: purple }}
        onClick={playAudio}
      >
        <FaPlay className="play-icon" />
      </div>
      <audio ref={audioRef}>
        <source src={mp3Links[0] ? mp3Links[0].audio : ""} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}

export default Title;
