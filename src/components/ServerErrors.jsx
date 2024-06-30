import React from "react";
import "../components.css";

function ServerErrors({ theme }) {
  return (
    <div
      className="component-card"
      style={{ color: theme.color, backgroundColor: theme.cardBackground }}
    >
      <div className="card-header">
        <p>Server Errors</p>
        <div>
          <h1 className="card-title">32</h1>
        </div>
      </div>
      <div className="server-errors-table">
        <div
          className="server-errors-header"
          style={{
            color: theme.tableHeaderColor,
            borderColor: theme.lineColor,
          }}
        >
          <div className="server-errors-cell">Last error date</div>
          <div className="server-errors-cell">Error Code</div>
        </div>
        <div
          className="server-errors-row"
          style={{ borderColor: theme.lineColor }}
        >
          <div className="server-errors-cell">3:15 / Jun 14</div>
          <div className="server-errors-cell">Out of Service - 408</div>
        </div>
        <div
          className="server-errors-row"
          style={{ borderColor: theme.lineColor }}
        >
          <div className="server-errors-cell">2:10 / Jun 14</div>
          <div className="server-errors-cell">Temp Suspended - 512</div>
        </div>
        <div
          className="server-errors-row"
          style={{ borderColor: theme.lineColor }}
        >
          <div className="server-errors-cell">12:12 / Jun 12</div>
          <div className="server-errors-cell">Not Found - 404</div>
        </div>
        <div
          className="server-errors-row"
          style={{ borderColor: theme.lineColor }}
        >
          <div className="server-errors-cell">11:59 / May 8</div>
          <div className="server-errors-cell">Not Found - 404</div>
        </div>
      </div>
    </div>
  );
}

export default ServerErrors;
