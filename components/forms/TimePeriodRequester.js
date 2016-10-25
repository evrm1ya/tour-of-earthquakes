import React, { PropTypes } from 'react';
import YearSelector from './inputs/YearSelector';
import MonthSelector from './inputs/MonthSelector';
import DaySelector from './inputs/DaySelector';
import HourInput from './inputs/HourInput';
import MinuteInput from './inputs/MinuteInput';
import SecondInput from './inputs/SecondInput';

const TimePeriodRequester = React.createClass({
  onTimeInputChange: function(startOrEnd, prop) {
    let self = this;

    return function(event) {
      if (startOrEnd === 'start') {
        return self.props.updateRequestStarttime({
          [prop]: event.target.value
        });
      }

      return self.props.updateRequestEndtime({
        [prop]: event.target.value
      });
    }
  },

  render: function() {
    const { starttime, endtime } = this.props;

    return (
      <form className='container-fluid'>
        <div className='row'>
          <div className='col-md-6'>
            <h3>Start Time</h3>

            <YearSelector 
              endOrStart='start'
              defaultYear={starttime.year}
              onYearChange={this.onTimeInputChange('start', 'month')}
              />

            <MonthSelector 
              endOrStart='start' 
              defaultMonth={starttime.month}
              onMonthChange={this.onTimeInputChange('start', 'month')}
              />

            <DaySelector
              endOrStart='start'
              defaultDay={starttime.day}
              onDayChange={this.onTimeInputChange('start', 'day')}
              />

            <HourInput
              endOrStart='start'
              defaultHour={starttime.hour}
              onHourChange={this.onTimeInputChange('start', 'hour')}
              />

            <MinuteInput
              endOrStart='start'
              defaultMinute={starttime.minute}
              onMinuteChange={this.onTimeInputChange('start', 'minute')}
              />

            <SecondInput
              endOrStart='start'
              defaultSecond={starttime.second}
              onSecondChange={this.onTimeInputChange('start', 'second')}
              />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6'>
            <h3>End Time</h3>

            <YearSelector
              endOrStart='end'
              defaultYear={endtime.year}
              onYearChange={this.onTimeInputChange('end', 'year')}
              />


            <MonthSelector 
              endOrStart='end' 
              defaultMonth={endtime.month}
              onMonthChange={this.onTimeInputChange('end', 'month')}
              />

            <DaySelector
              endOrStart='end'
              defaultDay={endtime.day}
              onDayChange={this.onTimeInputChange('end', 'day')}
              />

            <HourInput
              endOrStart='end'
              defaultHour={endtime.minute}
              onHourChange={this.onTimeInputChange('end', 'hour')}
              />

            <MinuteInput
              endOrStart='end'
              defaultMinute={endtime.minute}
              onMinuteChange={this.onTimeInputChange('end', 'minute')}
              />

            <SecondInput
              endOrStart='end'
              defaultSecond={endtime.second}
              onSecondChange={this.onTimeInputChange('end', 'second')}
              />
          </div>
        </div>
      </form>
    );
  }
});

export default TimePeriodRequester;

