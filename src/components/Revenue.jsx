import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import "../components.css";

const rData = [3521, 4678, 1254, 714, 8096, 2290, 325, 1852];
const xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

const BarChartRevenue = ({ theme }) => {
  return (
    <BarChart
      className="barchart"
      colors={["#4075FF"]}
      width={400}
      height={150}
      series={[
        {
          data: rData,
          valueFormatter: (v) => {
            return `${v} LYD`;
          },
        },
      ]}
      grid={{ horizontal: true }}
      xAxis={[
        {
          data: xLabels,
          scaleType: "band",
          categoryGapRatio: 0.6,
          tickLabelPlacement: "middle",
        },
      ]}
      bottomAxis={{
        disableTicks: true,
        disableLine: true,
      }}
      leftAxis={{
        disableTicks: true,
        disableLine: true,
      }}
      margin={{ top: 0, bottom: 20, right: 20, left: 42 }}
      sx={{
        [`.MuiChartsAxis-line`]: {
          stroke: "gray",
        },
        [`.MuiChartsGrid-line`]: {
          stroke: theme.lineColor,
        },
        [`.MuiChartsAxis-tickLabel`]: {
          fill: theme.color,
        },
      }}
    />
  );
};
function Revenue({ theme }) {
  return (
    <div
      className="component-card"
      style={{ color: theme.color, backgroundColor: theme.cardBackground }}
    >
      <div className="card-header">
        <p>Revenue</p>
        <div>
          <h1 className="card-title">20,430 LYD</h1>
          <p className="indicator">
            3.5% <span className="arrow">↑</span>
          </p>
        </div>
      </div>
      <BarChartRevenue theme={theme} />
    </div>
  );
}

export default Revenue;
