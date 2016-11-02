import React, { PropTypes } from 'react';
import { map } from 'ramda';
import msToHumanFriendlyDate from '../../utils/dates/msToHumanFriendlyDate';

const OverviewEarthquakeTable = React.createClass({
  renderTableRows: function() {
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
    }, this.props.sortedEarthquakes);
  },

  onSortByTimeDropdownClick: function() {
    this.props.toggleTimeSorterMenuIsVisible();
  },

  onSortByMagnitudeDropdownClick: function() {
    this.props.toggleMagnitudeSorterMenuIsVisible();
  },

  onSortCategoryClick: function(sortedBy) {
    const { sortAllEarthquakesTable } = this.props;

    return function(event) {
      sortAllEarthquakesTable(sortedBy);
    }
  },

  render: function() {
    if (this.props.sortedEarthquakes.length === 0) {
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
                  onClick={this.onSortByTimeDropdownClick}
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
                  onClick={this.onSortByMagnitudeDropdownClick}
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

