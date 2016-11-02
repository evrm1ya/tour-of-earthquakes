import React, { PropTypes } from 'react';
import { map } from 'ramda';
import msToHumanFriendlyDate from '../../utils/dates/msToHumanFriendlyDate';

const OverviewEarthquakeTable = React.createClass({
  tableRowsSorted: function(sortedEarthquakes) {
    return map(earthquake => {
      const {
        id,
        time,
        place,
        mag,
        url
      } = earthquake;

      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{msToHumanFriendlyDate(time)}</td>
          <td>{place}</td>
          <td>{mag}</td>
          <td><a href={url}>{url}</a></td>
        </tr>
      );
    }, sortedEarthquakes);
  },

  renderTableRows: function() {
    const {
      allEarthquakesTableSortedBy,
      earthquakesSortedByTime,
      earthquakesSortedByMagnitude
    } = this.props;

    switch (allEarthquakesTableSortedBy) {
      case 'timeHighToLow':
        return this.tableRowsSorted(earthquakesSortedByTime);
      case 'timeLowToHigh':
        return this.tableRowsSorted(earthquakesSortedByTime.reverse());
      case 'magnitudeHighToLow':
        return this.tableRowsSorted(earthquakesSortedByMagnitude);
      case 'magnitudeLowToHigh':
        return this.tableRowsSorted(earthquakesSortedByMagnitude.reverse());
      default:
        return this.tableRowsSorted(earthquakesSortedByTime);
    }
  },

  onSortCategoryClick: function(sortedBy) {
    const { setAllEarthquakesTableSortedBy } = this.props;

    return function(event) {
      setAllEarthquakesTableSortedBy(sortedBy);
    }
  },

  render: function() {
    if (this.props.earthquakesSortedByTime.length === 0) {
      return (
        <p>There are no earthquakes in the requested dataset.</p>
      );
    }

    return (
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>ID</th>

            <th>
              <div className='btn-group btn-group-xs'>
                <button type='button' 
                  className='btn btn-default dropdown-toggle'
                  onClick={() => this.props.toggleTimeSorterMenuIsVisible()}
                  >
                  <b>Time</b>
                  <span className='caret'></span>
                </button>
                
                <ul className={this.props.timeSorterMenuIsVisible
                  ? 'dropdown-menu show'
                  : 'dropdown-menu'}
                  >
                  <li>
                    <a href='javascript:void(0)'
                      onClick={this.onSortCategoryClick('timeHighToLow')}
                      >
                      Highest to Lowest
                    </a>
                  </li>

                  <li>
                    <a href='javascript:void(0)'
                      onClick={this.onSortCategoryClick('timeLowToHigh')}
                      >
                      Lowest to Highest
                    </a>
                  </li>
                </ul>
              </div>
            </th>

            <th>Place</th>

            <th>
              <div className='btn-group btn-group-xs'>
                <button 
                  type='button' 
                  className='btn btn-default dropdown-toggle'
                  onClick={() => this.props.toggleMagnitudeSorterMenuIsVisible()}
                  >
                  <b>Magnitude</b>
                  <span className='caret'></span>
                </button>

                <ul className={this.props.magnitudeSorterMenuIsVisible
                  ? 'dropdown-menu show'
                  : 'dropdown-menu'}
                  >
                  <li>
                    <a href='javascript:void(0)'
                      onClick={this.onSortCategoryClick('magnitudeHighToLow')}
                      >
                      Highest to Lowest
                    </a>
                  </li>

                  <li>
                    <a href='javascript:void(0)'
                      onClick={this.onSortCategoryClick('magnitudeLowToHigh')}
                      >
                      Lowest to Highest
                    </a>
                  </li>
                </ul>
              </div>
            </th>

            <th>URL</th>
          </tr>
        </thead>

        <tbody>
          {this.renderTableRows()}
        </tbody>
      </table>
    );
  }
});

OverviewEarthquakeTable.propTypes = {
  allEarthquakes: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default OverviewEarthquakeTable;

