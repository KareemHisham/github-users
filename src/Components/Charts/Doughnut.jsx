import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Doughnut2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
ReactFC.fcRoot(FusionCharts, Doughnut2D, FusionTheme);

const Doughnut = ({ chartData }) => {
  const chartConfigs = {
    type: "Doughnut2D",
    width: "100%",
    height: "300",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Stars Per Language",
        theme: "candy",
        decimals: 0,
        doughnutRadius: "50%",
        pieRadius: "40%",
        showPercentValues: 0
      },
      data: chartData,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Doughnut;
