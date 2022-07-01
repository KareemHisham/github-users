import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Pie2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Pie2D, FusionTheme);

const PieChart = ({ chartData }) => {
  const chartConfigs = {
    type: "Pie2D",
    width: "100%",
    height: "300",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Languages",
        theme: "fusion",
        decimals: 0,
        pieRadius: "40%",
      },
      data: chartData,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default PieChart;
