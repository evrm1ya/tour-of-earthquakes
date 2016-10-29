import React, { PropTypes } from 'react';
import highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';
import { map, merge } from 'ramda';

const styleConfig = {
  chart: {
    type: 'column',
    height: 300,
    width: 500
  },
  //series: [{
  //  data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
  //}],
  title: {
    text: 'Earthquakes by Location'
  }
};

const TopFiveEarthquakeFrequencyLocationsGraph = React.createClass({
  chartConfig: function() {
    const { frequenciesByLocation } = this.props;

    const seriesDataFromProps = map(frequencyByLocation => {
      const { location, frequency } = frequencyByLocation;
      return [ location, frequency ];
    }, frequenciesByLocation);

    const categories = map(frequencyByLocation => {
      return frequencyByLocation.location;
    }, frequenciesByLocation);

    console.log(categories);

    return {
      ...styleConfig,
      xAxis: { categories: categories },
      series: [{
        data: seriesDataFromProps
      }]
    };
  },

  render: function() {
    console.log(this.props);
    return (
      <div>
        <ReactHighcharts config={this.chartConfig()}></ReactHighcharts>
      </div>
    );
  }
});

export default TopFiveEarthquakeFrequencyLocationsGraph;

