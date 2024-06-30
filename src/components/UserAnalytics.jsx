import React from "react";
import "../components.css";
import { LineChart } from "@mui/x-charts/LineChart";
import dayjs from "dayjs";

const userData = [65, 357, 122, 78, 120, 210, 300, 30, 134, 123, 200, 30];
const xAxisData = [
  new Date(2023, 0, 1),
  new Date(2023, 1, 1),
  new Date(2023, 2, 1),
  new Date(2023, 3, 1),
  new Date(2023, 4, 1),
  new Date(2023, 5, 1),
  new Date(2023, 6, 1),
  new Date(2023, 7, 1),
  new Date(2023, 8, 1),
  new Date(2023, 9, 1),
  new Date(2023, 10, 1),
  new Date(2023, 11, 1),
];

const LineChartUsers = ({ theme }) => {
  return (
    <LineChart
      xAxis={[
        {
          data: xAxisData,
          tickInterval: xAxisData,
          scaleType: "time",
          valueFormatter: (date) => dayjs(date).format("MMM"),
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
      grid={{ vertical: true }}
      series={[
        {
          data: userData,
          valueFormatter: (v) => {
            return `${v} Users`;
          },
          showMark: false,
        },
      ]}
      height={170}
      width={800}
      margin={{ top: 12, bottom: 32 }}
      colors={["#4075FF"]}
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
function UserAnalytics({ theme }) {
  return (
    <div
      className="component-card"
      style={{ color: theme.color, backgroundColor: theme.cardBackground }}
    >
      <div className="card-header-2">User Analytics</div>
      <LineChartUsers theme={theme} />
    </div>
  );
}

export default UserAnalytics;
