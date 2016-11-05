import React from 'react';
import { connect } from 'react-redux';
import ConnectedTimePeriodRequester from '../forms/ConnectedTimePeriodRequester';
import ConnectedTopFiveMagnitudeTable from '../tables/ConnectedTopFiveMagnitudeTable';
import ConnectedOverviewEarthquakeTable from '../tables/ConnectedOverviewEarthquakeTable';
import ConnectedTopFiveEarthquakeFrequencyLocationsGraph from '../graphs/ConnectedTopFiveEarthquakeFrequencyLocationsGraph';
import ConnectedHighestMagnitudeLocationMap from '../maps/ConnectedHighestMagnitudeLocationMap';

const OverviewPage = React.createClass({
  render: function() {
    if (!this.props.overviewCanRender) {
      return (
        <div className='body-time-period-requester-wrapper'>
          <div className='body-time-period-requester'>
            <ConnectedTimePeriodRequester />
          </div>
        </div>
      );
    }

    return (
      <div className='container-fluid overview-page'>
        <h1>Overview</h1>

        <section className='overview-features-section'>
          <div className='feature-wrapper'>
            <div className='feature-title'>
              <h3>Earthquakes by Location</h3>
            </div>

            <div className='feature'>
              <ConnectedTopFiveEarthquakeFrequencyLocationsGraph />
            </div>
          </div>

          <div className='feature-wrapper'>
            <div className='feature-title'>
              <h3>Top Five Magnitudes</h3>
            </div>

            <div className='feature'>
              <ConnectedTopFiveMagnitudeTable />
            </div>
          </div>

          <div className='feature-wrapper'>
            <div className='feature-title'>
              <h3>Highest Magnitude Location</h3>
            </div>

            <div className='feature'>
              <ConnectedHighestMagnitudeLocationMap />
            </div>
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

function mapStateToProps(state) {
  return {
    overviewCanRender: state.overview.overviewCanRender
  };
}

export default connect(
  mapStateToProps
)(OverviewPage);

