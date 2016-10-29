import React, { PropTypes } from 'react';
import highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';
import { equals, map, merge } from 'ramda';

// '../../utils/graphs/earthquakeFrequencies/';
import MOCK_FREQUENCY_CONFIG from '../../utils/graphs/earthquakeFrequencies/mock_frequency_config';
import buildOverviewFrequencyByLocationGraphConfig from 
'../../utils/graphs/earthquakeFrequencies/buildOverviewFrequencyByLocationGraphConfig';
import staticOverviewFrequencyByLocationGraphConfig from 
'../../utils/graphs/earthquakeFrequencies/staticOverviewFrequencyByLocationGraphConfig';

const TopFiveEarthquakeFrequencyLocationsGraph = React.createClass({
  shouldComponentUpdate: function(nextProps) {
    const { frequenciesByLocation: next } = nextProps;
    const { frequenciesByLocation: old } = this.props;

    return !equals(old, next);
  },

  graphConfig: function() {
    const { frequenciesByLocation } = this.props;

    return buildOverviewFrequencyByLocationGraphConfig(
      staticOverviewFrequencyByLocationGraphConfig,
      frequenciesByLocation
    );
  },

  render: function() {
    return (
      <div>
        <ReactHighcharts config={this.graphConfig()}></ReactHighcharts>
      </div>
    );
  }
});

export default TopFiveEarthquakeFrequencyLocationsGraph;

