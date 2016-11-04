import React from 'react';
import { connect } from 'react-redux';
import MostRecentEarthquake from '../../components/details/MostRecentEarthquake';

function mapStateToProps(state) {
  return {
    mostRecentEarthquake: state.earthquakes.sortedByTime[0]
  }
}

export default connect(
  mapStateToProps
)(MostRecentEarthquake);

