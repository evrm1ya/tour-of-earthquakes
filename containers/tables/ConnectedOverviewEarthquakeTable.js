import React from 'react';
import { connect } from 'react-redux';
import OverviewEarthquakeTable from '../../components/tables/OverviewEarthquakeTable';

function mapStateToProps(state) {
  return {
    allEarthquakes: state.earthquakes.flattened
  };
}

export default connect(
  mapStateToProps
)(OverviewEarthquakeTable);

