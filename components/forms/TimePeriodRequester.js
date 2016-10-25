import React, { PropTypes } from 'react';

const YearSelector = props => {
  return (
    <div className='col-xs-2 form-group'>
      <label htmlFor={props.endOrStart + '-year'}>Year</label>
      <select className='form-control' 
        defaultValue={props.defaultYear}
        >
        <option value='2016'>2016</option>
        <option value='2015'>2015</option>
      </select>
    </div>
  );
};

const MonthSelector = props => {
  return (
    <div className='col-xs-2 form-group'>
      <label htmlFor={props.endOrStart + '-month'}>Month</label>
      <select className='form-control' 
        defaultValue={props.defaultMonth}
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

const DaySelector = props => {
  return (
    <div className='col-xs-2 form-group'>
      <label htmlFor={props.endOrStart + '-day'}>Day</label>
      <select className='form-control' 
        defaultValue={props.defaultDay}
        >
        <option value='01'>01</option>
        <option value='02'>02</option>
        <option value='03'>03</option>
        <option value='04'>04</option>
        <option value='05'>05</option>
        <option value='06'>06</option>
        <option value='07'>07</option>
        <option value='08'>08</option>
        <option value='09'>09</option>
        <option value='10'>10</option>
        <option value='11'>11</option>
        <option value='13'>13</option>
        <option value='14'>14</option>
        <option value='15'>15</option>
        <option value='16'>16</option>
        <option value='17'>17</option>
        <option value='18'>18</option>
        <option value='19'>19</option>
        <option value='20'>20</option>
        <option value='21'>21</option>
        <option value='23'>23</option>
        <option value='24'>24</option>
        <option value='25'>25</option>
        <option value='26'>26</option>
        <option value='27'>27</option>
        <option value='28'>28</option>
        <option value='29'>29</option>
        <option value='30'>30</option>
        <option value='31'>31</option>
      </select>
    </div>
  );
};

const TimePeriodRequester = React.createClass({
  render: function() {
    return (
      <div className='row'>
        <div className='col-md-6'>
          <h3>Start Time</h3>

          <YearSelector
            endOrStart='start'
            defaultYear='2016'
            />

          <MonthSelector 
            endOrStart='start' 
            defaultMonth='05'
            />

          <DaySelector
            endOrStart='start'
            defaultDay='02'
            />
        </div>

        <div className='col-md-6'>
          <h3>End Time</h3>

          <YearSelector
            endOrStart='end'
            defaultYear='2016'
            />

          <MonthSelector 
            endOrStart='end' 
            defaultMonth='06'
            />

          <DaySelector
            endOrStart='end'
            defaultDay='03'
            />
        </div>
      </div>
    );
  }
});

export default TimePeriodRequester;

