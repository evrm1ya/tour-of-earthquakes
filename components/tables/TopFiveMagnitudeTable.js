import React, { PropTypes } from 'react';
import { map } from 'ramda';

const TopFiveMagnitudeTable = React.createClass({
  propTypes: {
    topFiveMagnitudeEarthquakes: React.PropTypes.arrayOf(React.PropTypes.object)
  },

  renderTableRows: function() {
    return map(earthquake => {
      const { id, mag, place } = earthquake;

      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{mag}</td>
          <td>{place}</td>
        </tr>
      );
    }, this.props.topFiveMagnitudeEarthquakes);
  },

  render: function() {
    if (this.props.topFiveMagnitudeEarthquakes.length === 0) {
      return (
        <p>There are no earthquakes available.</p>
      );
    }

    return (
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Magnitude</th>
            <th>Place</th>
          </tr>
        </thead>

        <tbody>
          {this.renderTableRows()}
        </tbody>
      </table>
    );
  }
});

export default TopFiveMagnitudeTable;


