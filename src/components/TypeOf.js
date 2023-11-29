import React from "react";
import "../App.css";

function TypeOf({ gray, partOfSpeech }) {
  return (
    <div className="type-of">
      {partOfSpeech}
      <div className="h-seperator" style={{ backgroundColor: gray }}></div>
    </div>
  );
}

export default TypeOf;
