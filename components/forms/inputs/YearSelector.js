import React, { PropTypes } from 'react';

const YearSelector = props => {
  return (
    <div className='form-group'>
      <label htmlFor={props.endOrStart + '-year'}>Year</label>
      <select className='form-control' 
        defaultValue={props.defaultYear}
        onChange={props.onYearChange}
        >
        <option value='2017'>2017</option>
        <option value='2016'>2016</option>
      </select>
    </div>
  );
};

YearSelector.propTypes = {
  endOrStart: React.PropTypes.string,
  defaultYear: React.PropTypes.string,
  onYearChange: React.PropTypes.func
};

export default YearSelector;

