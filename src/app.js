import { chart } from "./chart";
import { getChartData } from "./data";

const tgChart = chart(document.getElementById("chart"), 
  getChartData());

tgChart.init();