const MOCK_FREQUENCY_CONFIG = {
  chart: {
    type: 'column',
    height: 300,
    width: 500
  },

  legend: {
    enabled: false
  },

  series: [
    { 
      data: [
        ['California', 10],
        ['Kansas', 9],
        ['Hawaii', 8],
        ['British Virgin Isles', 6],
        ['Oklahoma', 2]
      ],
      dataLabels: {
        align: 'center',
        enabled: true
      }
    }
  ],

  title: {
    text: 'Earthquakes by Location'
  },

  tooltip: {
    enabled: false
  },

  xAxis: {
    categories: ['California', 'Kansas', 'Hawaii', 'British Virgin Isles', 'Oklahoma'],
    title: {
      text: 'Location'
    }
  },

  yAxis: {
    title: {
      text: 'Number of Earthquakes'
    }
  },
};

export default MOCK_FREQUENCY_CONFIG;

