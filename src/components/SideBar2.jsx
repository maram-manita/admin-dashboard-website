import { LuMoveVertical, LuChevronLast, LuChevronFirst } from "react-icons/lu";
import { useContext, createContext, useState } from "react";
import {
  MdShowChart,
  MdExitToApp,
  MdSupervisedUserCircle,
  MdOutlinePeopleAlt,
  MdSettings,
} from "react-icons/md";
import { FiPieChart } from "react-icons/fi";
import "../components.css";
const SidebarContext = createContext();

export default function Sidebar({ theme }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="sidebar-container">
      <nav
        className="navbar"
        style={{
          backgroundColor: theme.cardBackground,
          color: theme.color,
          borderColor: theme.lineColor,
        }}
      >
        <div className="navbar-header">
          <img
            src="https://img.logoipsum.com/222.svg"
            className={`logo ${expanded ? "logo-expanded" : "logo-collapsed"}`}
            alt=""
            onClick={() => setExpanded((curr) => !curr)}
          />
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="sidebar-content">
            <SidebarItem icon={<MdShowChart />} text={"Analytics"} active />
            <SidebarItem icon={<MdSupervisedUserCircle />} text={"Users"} />
            <SidebarItem icon={<MdOutlinePeopleAlt />} text={"Team"} alert />

            <SidebarItem icon={<FiPieChart />} text={"Revenue"} />
            <div
              className="h-line"
              style={{ backgroundColor: theme.lineColor }}
            />
            <SidebarItem icon={<MdSettings />} text={"Settings"} />
          </ul>
        </SidebarContext.Provider>

        <div
          className="sidebar-footer"
          style={{ borderColor: theme.lineColor }}
        >
          <img
            src="https://ui-avatars.com/api/?background=D9E4FF&color=4075FF&bold=true"
            alt=""
            className="user-avatar"
          />
          <div
            className={`
              user-info-container
              ${expanded ? "user-info-expanded" : "user-info-collapsed"}
          `}
          >
            <div className="user-info">
              <h4 className="user-name">John Doe</h4>
            </div>
            <MdExitToApp size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`
        sidebar-item
        ${active ? "sidebar-item-active" : "sidebar-item-hover"}
    `}
    >
      {icon}
      <span
        className={`sidebar-item-text ${
          expanded
            ? "sidebar-item-text-expanded"
            : "sidebar-item-text-collapsed"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`sidebar-item-alert ${
            expanded ? "" : "sidebar-item-alert-collapsed"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          sidebar-item-tooltip
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
