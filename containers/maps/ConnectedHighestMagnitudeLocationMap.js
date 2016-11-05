import React from 'react';
import { connect } from 'react-redux';
import HighestMagnitudeLocationMap from '../../components/maps/HighestMagnitudeLocationMap';

function mapStateToProps(state) {
  const { latitude, longitude, mag } = state.earthquakes.sortedByMagnitude[0];

  return {
    lat: latitude,
    lng: longitude,
    magnitude: mag
  };
}

export default connect(
  mapStateToProps
)(HighestMagnitudeLocationMap);

