import React, { PropTypes } from 'react';

const YearSelector = props => {
  return (
    <div className='col-xs-2 form-group'>
      <label htmlFor={props.endOrStart + '-year'}>Year</label>
      <select className='form-control' 
        defaultValue={props.defaultYear}
        onChange={props.onYearChange}
        >
        <option value='2016'>2016</option>
        <option value='2015'>2015</option>
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
