const staticOverviewFrequencyByLocationGraphConfig = {
  chart: {
    type: 'column',
    height: 300,
    width: 500
  },

  legend: {
    enabled: false
  },

  title: {
    text: 'Earthquakes by Location'
  },

  tooltip: {
    enabled: false
  },

  yAxis: {
    title: {
      text: 'Number of Earthquakes'
    }
  },

  xAxis: {
    title: {
      text: 'Location'
    }
  }
};

export default staticOverviewFrequencyByLocationGraphConfig;

