import React, { PropTypes } from 'react';

const HourInput = props => (
  <div className='col-xs-2 form-group'>
    <label htmlFor={props.endOrStart + '-hour'}>Hour</label>
    <input className='form-control'
      defaultValue={props.defaultHour}
      onChange={props.onHourChange}
      />
  </div>
);

HourInput.propTypes = {
  endOrStart: React.PropTypes.string,
  defaultHour: React.PropTypes.string,
  onHourChange: React.PropTypes.func
};

export default HourInput;

