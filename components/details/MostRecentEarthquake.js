import React from 'react';

const MostRecentEarthquake = ({ mostRecentEarthquake }) => {
  return (
    <div className='most-recent-earthquake-details'>
      {mostRecentEarthquake.id}
    </div>
  );
};

export default MostRecentEarthquake;

