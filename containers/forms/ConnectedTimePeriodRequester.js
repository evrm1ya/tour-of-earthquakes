import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  updateRequestEndtime,
  updateRequestStarttime,
  fetchEqDataByTimeRange
} from '../../actions';
import TimePeriodRequester from '../../components/forms/TimePeriodRequester';

function mapStateToProps(state) {
  return {
    endtime: state.request.endtime,
    starttime: state.request.starttime,
    isRequesting: state.request.isRequesting
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateRequestEndtime,
    updateRequestStarttime,
    fetchEqDataByTimeRange
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimePeriodRequester);

