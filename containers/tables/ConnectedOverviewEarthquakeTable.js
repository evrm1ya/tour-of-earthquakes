import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  toggleMagnitudeSorterMenuIsVisible,
  toggleTimeSorterMenuIsVisible,
  setAllEarthquakesTableSortedBy,
  sortAllEarthquakesTable
} from '../../actions';
import OverviewEarthquakeTable from '../../components/tables/OverviewEarthquakeTable';

function mapStateToProps(state) {
  const { sortedByTime } = state.earthquakes;
  const { 
    allEarthquakesTableSortedBy,
    magnitudeSorterMenuIsVisible, 
    timeSorterMenuIsVisible,
    sortedEarthquakesForAllEarthquakesTable
  } = state.overview;

  let sortedEarthquakes = (allEarthquakesTableSortedBy === '')
    ? sortedByTime
    : sortedEarthquakesForAllEarthquakesTable;

  return {
    magnitudeSorterMenuIsVisible,
    timeSorterMenuIsVisible,
    allEarthquakesTableSortedBy,
    sortedEarthquakes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleMagnitudeSorterMenuIsVisible,
    toggleTimeSorterMenuIsVisible,
    sortAllEarthquakesTable
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OverviewEarthquakeTable);

