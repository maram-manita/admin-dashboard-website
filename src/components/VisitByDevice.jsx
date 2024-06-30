import React, { useState } from "react";
import "../components.css";
import { PieChart } from "@mui/x-charts/PieChart";
import { ChartsLegend } from "@mui/x-charts/ChartsLegend";

const PieChartDevice = ({ theme }) => {
  const [highlighted, setHighlighted] = useState("item");
  const [faded, setFaded] = useState("global");
  return (
    <PieChart
      colors={["#4075FF", "#FEBC10"]}
      series={[
        {
          data: [
            {
              device: "iOS",
              value: 2296,
              label: "iOS",
              highlighted: { additionalRadius: 10 },
            },
            {
              device: "Android",
              value: 984,
              label: "Android",
              highlighted: { additionalRadius: 10 },
            },
          ],
          innerRadius: 60,
          outerRadius: 100,
          paddingAngle: 2,
          cornerRadius: 0,
          startAngle: -90,
          endAngle: 90,
          cx: 100,
          cy: 108,
          valueFormatter: (v) => {
            return `${v.value} Users`;
          },
          highlightScope: {
            highlighted,
            faded,
          },
        },
      ]}
      width={216}
      height={175}
      slotProps={{
        legend: {
          direction: "row",
          position: { vertical: "bottom", horizontal: "left" },
          padding: { top: 0, left: 10 },
          itemGap: 80,
          itemMarkWidth: 10,
          itemMarkHeight: 10,
          labelStyle: {
            fill: theme.color,
          },
        },
      }}
      sx={{
        [`.MuiChartsLegend-mark`]: {
          "clip-path": "circle(50% at 50% 50%)",
        },
        [`.MuiPieArc-root`]: {
          stroke: "none",
        },
      }}
      margin={{
        top: 0,
        bottom: 0,
      }}
    />
  );
};
const VisitByDevice = ({ theme }) => {
  return (
    <div
      className="component-card"
      style={{ color: theme.color, backgroundColor: theme.cardBackground }}
    >
      <div className="card-header">
        <p>Users</p>
        <div>
          <h1 className="card-title">3,820</h1>
          <p className="indicator">2.3% ↑</p>
        </div>
      </div>

      <PieChartDevice theme={theme} />
    </div>
  );
};

export default VisitByDevice;
