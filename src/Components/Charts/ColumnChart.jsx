import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column3D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.ocean";
ReactFC.fcRoot(FusionCharts, Column3D, FusionTheme);

const ColumnChart = ({ chartData }) => {
  const chartConfigs = {
    type: "Column3D",
    width: "100%",
    height: "300",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Most Popular",
        theme: "ocean",
        decimals: 0,
        doughnutRadius: "50%",
        pieRadius: "40%",
        showPercentValues: 0,
        xAxisName: "Stars",
        yAxisName: "Repos",
        xAxisNameFont: "16px",
        yAxisNameFont: "16px",
      },
      data: chartData,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default ColumnChart;
