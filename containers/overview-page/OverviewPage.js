import React from 'react';
import { connect } from 'react-redux';
import ConnectedTimePeriodRequester from '../forms/ConnectedTimePeriodRequester';
import ConnectedTopFiveMagnitudeTable from '../tables/ConnectedTopFiveMagnitudeTable';
import ConnectedOverviewEarthquakeTable from '../tables/ConnectedOverviewEarthquakeTable';
import ConnectedTopFiveEarthquakeFrequencyLocationsGraph from '../graphs/ConnectedTopFiveEarthquakeFrequencyLocationsGraph';
import ConnectedMostRecentEarthquake from '../details/ConnectedMostRecentEarthquake';

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

        <section className='overview-graphs-section'>
            <div className='graph-wrapper'>
              <ConnectedTopFiveEarthquakeFrequencyLocationsGraph />
            </div>

            <div className='graph-wrapper'>
              <h3>Top Five Magnitudes</h3>
              <ConnectedTopFiveMagnitudeTable />
            </div>

            <div className='graph-wrapper'>
              <h3>Most Recent Earthquake</h3>
              <ConnectedMostRecentEarthquake />
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

