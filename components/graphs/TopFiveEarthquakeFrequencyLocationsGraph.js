import React, { PropTypes } from 'react';
import highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';
import { map, merge } from 'ramda';

// '../../utils/graphs/earthquakeFrequencies/';
import MOCK_FREQUENCY_CONFIG from '../../utils/graphs/earthquakeFrequencies/mock_frequency_config';
import buildOverviewFrequencyByLocationGraphConfig from 
'../../utils/graphs/earthquakeFrequencies/buildOverviewFrequencyByLocationGraphConfig';
import staticOverviewFrequencyByLocationGraphConfig from 
'../../utils/graphs/earthquakeFrequencies/staticOverviewFrequencyByLocationGraphConfig';

//const TopFiveEarthquakeFrequencyLocationsGraph = React.createClass({
//  shouldComponentUpdate: function(nextProps) {
//  },
//
//  render: function() {
//    return (
//      <div>
//        <ReactHighcharts config={config}></ReactHighcharts>
//      </div>
//    );
//  }
//});

const TopFiveEarthquakeFrequencyLocationsGraph = props => {
  const config = buildOverviewFrequencyByLocationGraphConfig(
    staticOverviewFrequencyByLocationGraphConfig,
    props.frequenciesByLocation
  );

  return (
    <div>
      <ReactHighcharts config={config}></ReactHighcharts>
    </div>
  );
};

export default TopFiveEarthquakeFrequencyLocationsGraph;

