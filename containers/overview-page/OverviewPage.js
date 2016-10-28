import React from 'react';
import ConnectedTopFiveMagnitudeTable from '../tables/ConnectedTopFiveMagnitudeTable';
import ConnectedOverviewEarthquakeTable from '../tables/ConnectedOverviewEarthquakeTable';

const OverviewPage = React.createClass({
  render: function() {
    return (
      <div className='container-fluid overview-page'>
        <h1>Overview</h1>

        <section className='overview-graphs-section'>
            <div className='graph-wrapper'>
            </div>

            <div className='graph-wrapper'>
              <h3>Top Five Magnitudes</h3>
              <ConnectedTopFiveMagnitudeTable />
            </div>

            <div className='graph-wrapper'>
            </div>
        </section>

        <section className='overview-table-section'>
          <h2>All Requested Earthquakes</h2>
          <ConnectedOverviewEarthquakeTable />
        </section>
      </div>
    );
  }
});

export default OverviewPage;

