import React, { PropTypes } from 'react';

const MinuteInput = props => (
  <div className='col-xs-2 form-group'>
    <label htmlFor={props.endOrStart + '-hour'}>Minute</label>
    <input className='form-control'
      defaultValue={props.defaultMinute}
      onChange={props.onMinuteChange}
      />
  </div>
);

MinuteInput.propTypes = {
  endOrStart: React.PropTypes.string,
  defaultMinute: React.PropTypes.string,
  onMinuteChange: React.PropTypes.func
};

export default MinuteInput;

