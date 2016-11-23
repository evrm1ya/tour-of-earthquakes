import React from 'react';
import { Link } from 'react-router';

const EarthquakeDetailLink = ({ id }) => (
  <Link to={'detail/' + id}>
    {id}
  </Link>
);

export default EarthquakeDetailLink;

