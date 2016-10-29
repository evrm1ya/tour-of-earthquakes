import React from 'react';
import { connect } from 'react-redux';
import TopFiveEarthquakeFrequencyLocationsGraph from '../../components/graphs/TopFiveEarthquakeFrequencyLocationsGraph';

function mapStateToProps(state) {
  return {
    frequenciesByLocation: state.overview.topFiveEarthquakeFrequenciesByLocation
  };
}

export default connect(
  mapStateToProps
)(TopFiveEarthquakeFrequencyLocationsGraph);
