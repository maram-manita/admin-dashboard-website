import React, { useContext, useState } from "react";
import { FiChevronDown, FiMoon } from "react-icons/fi";
import "../components.css";
import dayjs from "dayjs";
import { GB, LY } from "country-flag-icons/react/3x2";

function Header({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const today = dayjs();
  const formattedDate = today.format("MMMM D, YYYY");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <div className="header-left">
        <h1 style={{ color: theme.color }}>Dashboard Overview</h1>
        <p>{formattedDate}</p>
      </div>

      <div className="header-right">
        <div className="lang-dropdown" style={{ color: theme.color }}>
          <div style={{ gap: "8px", display: "flex" }}>
            <GB className="lang-icon" />
            English
          </div>
          <FiChevronDown
            className="chevron-icon"
            onClick={toggleDropdown}
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          />
          <div
            className="dropdown-menu"
            style={{
              background: theme.background,
              transform: isOpen ? "scaleY(1)" : "scaleY(0)",
              borderColor: theme.lineColor,
            }}
          >
            <ul>
              <li>
                <LY className="lang-icon" style={{ marginRight: "8px" }} />
                Arabic
              </li>
            </ul>
          </div>
        </div>
        <div
          className="seperator"
          style={{ backgroundColor: theme.lineColor }}
        ></div>
        <div className="theme-toggle">
          <label class="switch">
            <input
              type="checkbox"
              onClick={toggleTheme}
              checked={theme.name === "dark"}
            />
            <span class="slider round"></span>
          </label>
          <FiMoon
            className="moon-icon"
            style={{ color: theme.name == "light" ? "#c0c0c0" : "#4075ff" }}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
