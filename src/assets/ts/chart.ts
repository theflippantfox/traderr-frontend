
import { Chart, registerables } from 'chart.js/dist/chart.esm';

import type { ChartData, ChartOptions } from '@typings/chart'

export const createChart = (data: ChartData, options: ChartOptions, type: string, chartRef: any) => {
  Chart.register(...registerables);
  const plugins = [];


  const chart = new Chart(chartRef, {
    type,
    data,
    options,
    plugins
  });

  return chart
}