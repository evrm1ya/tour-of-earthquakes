import React from 'react';
import Header from './header/Header';

const App = React.createClass({
  render: function() {
    return (
      <div className='app'>
        <Header />
        {this.props.children}
      </div>
    );
  }
});

export default App;

