import React from 'react';
import ConnectedTimePeriodRequester from '../forms/ConnectedTimePeriodRequester';
import ConnectedTopFiveMagnitudeTable from '../tables/ConnectedTopFiveMagnitudeTable';
import ConnectedOverviewEarthquakeTable from '../tables/ConnectedOverviewEarthquakeTable';

const OverviewPage = React.createClass({
  render: function() {
    return (
      <div className='container-fluid overview-page'>
        <h1>Overview</h1>

        <section className='container-fluid overview-requester-section'>
          <h2>Request Earthquakes by Time Range</h2>
          <ConnectedTimePeriodRequester />
        </section>

        <section className='overview-graphs-section'>
            <div className='col-md-4'>
            </div>
            <div className='col-md-4'>
              <h3>Top Five Magnitudes</h3>
              <ConnectedTopFiveMagnitudeTable />
            </div>
            <div className='col-md-4'>
            </div>
        </section>

        <section className='overview-table-section'>
          <ConnectedOverviewEarthquakeTable />
        </section>
      </div>
    );
  }
});

export default OverviewPage;

