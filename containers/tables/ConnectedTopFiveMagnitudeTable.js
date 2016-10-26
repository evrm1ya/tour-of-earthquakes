import React from 'react';
import { connect } from 'react-redux';
import TopFiveMagnitudeTable from '../../components/tables/TopFiveMagnitudeTable';

function mapStateToProps(state) {
  return {
    topFiveMagnitudeEarthquakes: state.overview.topFiveMagnitudes
  };
}

export default connect(
  mapStateToProps
)(TopFiveMagnitudeTable);

