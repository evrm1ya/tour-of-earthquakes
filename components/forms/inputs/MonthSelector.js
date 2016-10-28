import React, { PropTypes } from 'react';

const MonthSelector = props => {
  return (
    <div className='form-group'>
      <label htmlFor={props.endOrStart + '-month'}>Month</label>
      <select className='form-control' 
        defaultValue={props.defaultMonth}
        onChange={props.onMonthChange}
        >
        <option value='01'>January</option>
        <option value='02'>February</option>
        <option value='03'>March</option>
        <option value='04'>April</option>
        <option value='05'>May</option>
        <option value='06'>June</option>
        <option value='07'>July</option>
        <option value='08'>August</option>
        <option value='09'>September</option>
        <option value='10'>October</option>
        <option value='11'>November</option>
        <option value='12'>December</option>
      </select>
    </div>
  );
};

MonthSelector.propTypes = {
  endOrStart: React.PropTypes.string,
  defaultMonth: React.PropTypes.string,
  onMonthChange: React.PropTypes.func
};

export default MonthSelector;

