import React from 'react';

const OverviewPage = React.createClass({
  render: function() {
    return (
      <div className='container-fluid overview-page'>
        <h1>Overview</h1>

        <section className='overview-requester-section'>
        </section>

        <section className='overview-graphs-section'>
            <div className='col-md-4'>
            </div>
            <div className='col-md-4'>
            </div>
            <div className='col-md-4'>
            </div>
        </section>

        <section className='overview-table-section'>
        </section>
      </div>
    );
  }
});

export default OverviewPage;

