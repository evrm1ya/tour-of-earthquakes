import React, { PropTypes } from 'react';

const MARKER_SIZE = 40;
const markerStyle = {
  backgroundColor: 'red',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  width: MARKER_SIZE,
  height: MARKER_SIZE,
  left: -MARKER_SIZE / 2,
  top: -MARKER_SIZE / 2,
  borderRadius: '100%'
};

const MagnitudeMapMarker = React.createClass({
  render: function() {
    return (
      <div style={markerStyle}>
        {this.props.magnitude}
      </div>
    );
  }
});

export default MagnitudeMapMarker;

