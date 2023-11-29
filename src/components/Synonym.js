import React from "react";
import "../App.css";

function Synonym({ synonyms }) {
  return (
    <div className="synonyms">
      <p>Synonyms</p>
      <div style={{ whiteSpace: "wrap" }}>
        {synonyms.map((synonym, index) => (
          <span key={index}>
            {index > 0 && ", "}
            {synonym}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Synonym;
