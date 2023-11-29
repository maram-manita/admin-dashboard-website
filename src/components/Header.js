import React, { useContext, useState } from "react";
import { FiBook, FiChevronDown, FiMoon } from "react-icons/fi";
import "../App.css";
import { ThemeContext } from "../ThemeProvider.js";

function Header({ moonColor, background, color, gray, isSerif, setIsSerif }) {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <FiBook className="book-icon" />
      <div className="header-right">
        <div className="font-dropdown">
          {isSerif ? "Serif" : "Sans-serif"}

          <FiChevronDown
            className="chevron-icon"
            style={{ color: "#A440F0" }}
            onClick={toggleDropdown}
          />
          {isOpen && (
            <div
              className="dropdown-menu"
              style={{ backgroundColor: background, color: color }}
            >
              <ul>
                {/* <li onClick={toggleFont}>{isSerif ? "Sans-Serif" : "serif"}</li> */}
                <li
                  onClick={() => {
                    setIsSerif(true);
                  }}
                  style={{
                    backgroundColor: isSerif ? gray : background,
                  }}
                >
                  Serif
                </li>
                <li
                  onClick={() => {
                    setIsSerif(false);
                  }}
                  style={{
                    backgroundColor: isSerif ? background : gray,
                  }}
                >
                  Sans-serif
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="seperator"></div>
        <div className="theme-toggle">
          <label class="switch">
            <input
              type="checkbox"
              onClick={toggleTheme}
              checked={theme.name === "dark"}
            />
            <span class="slider round"></span>
          </label>
          <FiMoon className="moon-icon" style={{ color: moonColor }} />
        </div>
      </div>
    </header>
  );
}

export default Header;
