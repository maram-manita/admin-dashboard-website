import React, { useState } from "react";
import { MdShowChart, MdExitToApp } from "react-icons/md";
import { FiPieChart } from "react-icons/fi";

import "../components.css";

const SideBarItem = ({ icon, text }) => {
  return (
    <div className="sidebar-item">
      {icon}
      <p>{text}</p>
    </div>
  );
};
function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <MdShowChart />
        Business
      </div>
      <div className="sidebar-items">
        <SideBarItem icon={<MdShowChart />} text="Analytics" />
        <SideBarItem icon={<FiPieChart />} text="Revenue" />
        <SideBarItem icon={<MdShowChart />} text="Um" />
      </div>
      <div className="h-seperator" />
      <div className="sidebar-footer">
        <SideBarItem icon={<MdExitToApp />} text="Sign out" />
      </div>
    </div>
  );
}

export default SideBar;
