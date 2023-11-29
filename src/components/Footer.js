import React from "react";

function Footer({ gray, color, sourceUrl }) {
  return (
    <footer>
      <div className="h-seperator-2" style={{ backgroundColor: gray }}></div>
      <div>
        <p>Source</p>
        <a href={sourceUrl} style={{ color: color }}>
          {sourceUrl}{" "}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
