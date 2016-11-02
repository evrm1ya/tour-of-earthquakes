import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  toggleMagnitudeSorterMenuIsVisible,
  toggleTimeSorterMenuIsVisible,
  setAllEarthquakesTableSortedBy
} from '../../actions';
import OverviewEarthquakeTable from '../../components/tables/OverviewEarthquakeTable';

function mapStateToProps(state) {
  const { sortedByTime, sortedByMagnitude } = state.earthquakes;
  const { 
    allEarthquakesTableSortedBy,
    magnitudeSorterMenuIsVisible, 
    timeSorterMenuIsVisible 
  } = state.overview;

  return {
    earthquakesSortedByTime: sortedByTime,
    earthquakesSortedByMagnitude: sortedByMagnitude,
    magnitudeSorterMenuIsVisible,
    timeSorterMenuIsVisible,
    allEarthquakesTableSortedBy
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleMagnitudeSorterMenuIsVisible,
    toggleTimeSorterMenuIsVisible,
    setAllEarthquakesTableSortedBy
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OverviewEarthquakeTable);

