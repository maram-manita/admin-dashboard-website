import React from "react";
import { FiSearch } from "react-icons/fi";
import "../App.css";

function SearchBar({ gray, color, setQuery, fetchData, query, isSerif }) {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchData();
    }
  };
  return (
    <div className="search-bar-wrapper">
      <input
        type="text"
        className="search-bar"
        style={{
          backgroundColor: gray,
          color: color,
          fontFamily: isSerif ? "Pona" : "'Montserrat",
        }}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        value={query}
      />
      <FiSearch className="search-icon" onClick={fetchData} />
    </div>
  );
}

export default SearchBar;
