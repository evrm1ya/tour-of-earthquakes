import React, { PropTypes } from 'react';

const SecondInput = props => (
  <div className='form-group'>
    <label htmlFor={props.endOrStart + '-hour'}>Second</label>
    <input className='form-control'
      defaultValue={props.defaultSecond}
      onChange={props.onSecondChange}
      />
  </div>
);

SecondInput.propTypes = {
  endOrStart: React.PropTypes.string,
  defaultSecond: React.PropTypes.string,
  onSecondChange: React.PropTypes.func
};

export default SecondInput;

