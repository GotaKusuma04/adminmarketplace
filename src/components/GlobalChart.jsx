import Chart from 'react-apexcharts';
import { merge } from 'lodash';
import { useGlobalProvider } from '../hooks';

export const GlobalChart = ({ options, series, type }) => {
  const { isDarkTheme } = useGlobalProvider();

  const defaultChartOptions = {
    colors: ['#38bdf8'],
    chart: {
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    xaxis: {
      labels: { show: false, style: { colors: isDarkTheme ? '#0a0a0a' : '#020617' } },
      axisBorder: { show: false },
      axisTicks: { show: false },
      crosshairs: { show: false },
      tooltip: { enabled: false },
    },
    yaxis: {
      show: false,
      labels: { style: { colors: isDarkTheme ? '#020617' : '#fafafa' } },
    },
    grid: { show: false },
    tooltip: { shared: false, cssClass: 'text-dark' },
    dataLabels: { enabled: false },
    stroke: { curve: 'straight', width: 1 },
    markers: { size: 3, hover: { size: 6 } },
    legend: { labels: { colors: isDarkTheme ? '#0a0a0a' : '#FFFFF' } },
  };

  return (
    <Chart
      options={merge(defaultChartOptions, options)}
      series={series}
      type={type}
    />
  );
};