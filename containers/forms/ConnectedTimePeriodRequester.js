import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  updateRequestEndtime,
  updateRequestStarttime
} from '../../actions';
import TimePeriodRequester from '../../components/forms/TimePeriodRequester';

function mapStateToProps(state) {
  return {
    endtime: state.request.endtime,
    starttime: state.request.starttime
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateRequestEndtime,
    updateRequestStarttime
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimePeriodRequester);

