import React, { useState, useEffect } from "react";
import "../components.css";
import { PieChart } from "@mui/x-charts/PieChart";
import { styled } from "@mui/material/styles";
import { useDrawingArea } from "@mui/x-charts/hooks";

const StyledTitle = styled("text")(({ theme }) => ({
  fill: theme.color,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontWeight: "bold",
  fontSize: 34,
}));
const StyledText = styled("text")(({ theme }) => ({
  fill: theme.color,
  textAnchor: "middle",
  dominantBaseline: "central",
  fontSize: 14,
  padding: "10px",
  margin: 0,
  textTransform: "capitalize",
}));
function PieCenterLabel({ elements, theme }) {
  const [percent, caption] = elements;
  const { width, height, left, top } = useDrawingArea();
  return (
    <>
      <StyledTitle
        x={(left + width) / 2 + 8}
        y={(top + height) / 2 + 12}
        theme={theme}
      >
        {percent}
      </StyledTitle>
      <StyledText x={left + width / 2} y={top + height / 2 + 36} theme={theme}>
        {caption}
      </StyledText>
    </>
  );
}
const PieChartDevice = ({ theme, earnings, setEarnings }) => {
  const [highlighted, setHighlighted] = useState("item");
  const [faded, setFaded] = useState("global");

  return (
    <PieChart
      colors={["#4075FF", "#9EE1FF"]}
      series={[
        {
          data: [
            {
              device: "Earned",
              value: earnings.received,
              label: "Earned",
              highlighted: { additionalRadius: 10 },
            },
            {
              device: "Remaining",
              value: earnings.remaining,
              label: "Remaining",
              highlighted: { additionalRadius: 10 },
            },
          ],
          innerRadius: 92,
          outerRadius: 138,
          paddingAngle: 2,
          cornerRadius: 0,
          startAngle: -90,
          endAngle: 90,
          cx: 150,
          cy: 150,
          valueFormatter: (v) => {
            return `${v.value} LYD`;
          },
          highlightScope: {
            highlighted,
            faded,
          },
        },
      ]}
      width={300}
      height={175}
      slotProps={{
        legend: {
          hidden: true,
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
        left: 0,
        right: 0,
      }}
      padding={{
        left: 0,
        right: 0,
      }}
    >
      <PieCenterLabel
        theme={theme}
        elements={[
          `${Math.round((earnings.received / earnings.goal) * 100)}%`,
          `earned ${earnings.received} LYD`,
        ]}
      />
    </PieChart>
  );
};

function LeftToGoal({ theme }) {
  const [earnings, setEarnings] = useState({ received: 11500, goal: 12670 });
  useEffect(() => {
    const handleRemaining = () => {
      setEarnings((prevEarnings) => ({
        ...prevEarnings,
        remaining: prevEarnings.goal - prevEarnings.received,
      }));
    };
    handleRemaining();
  }, [earnings]);
  return (
    <div
      className="component-card"
      style={{ color: theme.color, backgroundColor: theme.cardBackground }}
    >
      <div className="card-header">
        <p>left to goal</p>
        <div>
          <h1 className="card-title">{earnings.remaining} LYD</h1>
        </div>
      </div>

      <PieChartDevice
        theme={theme}
        earnings={earnings}
        setEarnings={setEarnings}
      ></PieChartDevice>
    </div>
  );
}

export default LeftToGoal;
