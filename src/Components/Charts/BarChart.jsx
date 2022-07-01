import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Bar3D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
ReactFC.fcRoot(FusionCharts, Bar3D, FusionTheme);

const BarChart = ({ chartData }) => {
  const chartConfigs = {
    type: "Bar3D",
    width: "100%",
    height: "300",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Forked",
        theme: "candy",
        decimals: 0,
        doughnutRadius: "50%",
        pieRadius: "40%",
        showPercentValues: 0,
        xAxisName: "Forks",
        yAxisName: "Repos",
        xAxisNameFont: "16px",
        yAxisNameFont: "16px",
      },
      data: chartData,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default BarChart;
