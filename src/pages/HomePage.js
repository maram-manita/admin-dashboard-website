import "../App.css";
import Header from "../components/Header.jsx";
import LeftToGoal from "../components/LeftToGoal.jsx";
import Revenue from "../components/Revenue.jsx";
import ServerErrors from "../components/ServerErrors.jsx";
import SideBar from "../components/SideBar2.jsx";
import UserAnalytics from "../components/UserAnalytics.jsx";
import VisitByDevice from "../components/VisitByDevice.jsx";
import { ThemeContext } from "../ThemeProvider.js";
import { useContext } from "react";

function HomePage() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <div className="homepage-container">
      <SideBar theme={theme} />
      <div
        className="dashboard-container"
        style={{ backgroundColor: theme.background }}
      >
        <Header theme={theme} toggleTheme={toggleTheme} />
        <div className="row 1">
          <Revenue theme={theme} />
          <LeftToGoal theme={theme} />
          <ServerErrors theme={theme} />
        </div>
        <div className="row 2">
          <UserAnalytics theme={theme} />
          <VisitByDevice theme={theme} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
