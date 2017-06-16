import React from 'react';

const DetailPage = React.createClass({
  render: function() {
    console.log(this.props);
    return (
      <div className='detail-page'>
        <h1>Detail</h1>
      </div>
    );
  }
});

export default DetailPage;

