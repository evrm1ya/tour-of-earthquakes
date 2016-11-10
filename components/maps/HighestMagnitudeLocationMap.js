import React, { PropTypes } from 'react';
import GoogleMap from 'google-map-react';
import MagnitudeMapMarker from './MagnitudeMapMarker';

const HighestMagnitudeLocationMap = React.createClass({
  propTypes: {
    lat: React.PropTypes.number.isRequired,
    lng: React.PropTypes.number.isRequired,
    magnitude: React.PropTypes.number.isRequired
  },

  render: function() {
    const { lat, lng, magnitude } = this.props;

    return (
      <GoogleMap
        bootstrapURLKeys={{
          key: 'AIzaSyAB9-RmNOD0G5KkHldOwRqR3sJjKMqBQYY',
          language: 'en'
        }}
        center={[ lat, lng ]}
        defaultZoom={9}
        >
        <MagnitudeMapMarker lat={lat} lng={lng} magnitude={magnitude} />
      </GoogleMap>
    );
  }
});

export default HighestMagnitudeLocationMap;

