import React, { PropTypes } from 'react';
import msToHumanFriendlyDate from '../../utils/dates/msToHumanFriendlyDate';

const OverviewEarthquakeTable = React.createClass({
  renderTableRows: function() {
    return this.props.allEarthquakes.map(earthquake => {
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
    });
  },

  render: function() {
    if (this.props.allEarthquakes.length === 0) {
      return (
        <p>There are no earthquakes.</p>
      );
    }

    return (
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Time</th>
            <th>Place</th>
            <th>Magnitude</th>
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
  allEarthquakes: React.PropTypes.array
};

export default OverviewEarthquakeTable;

