import React from "react";
import "../App.css";

function Definition({ definitions }) {
  return (
    <div className="definition">
      <p>Meaning</p>
      <ul>
        {definitions
          ? definitions.map((definition) => (
              <li key={definition.definition}>{definition.definition}</li>
            ))
          : ""}
      </ul>
    </div>
  );
}

export default Definition;
