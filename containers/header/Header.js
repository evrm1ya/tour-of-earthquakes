import React from 'react';
import { Link } from 'react-router';
import ConnectedTimePeriodRequester from '../forms/ConnectedTimePeriodRequester';

const Header = React.createClass({
  getInitialState: function() {
    return {
      dropdownActive: false
    };
  },

  onDropdownToggle: function(event) {
    this.setState({ dropdownActive: !this.state.dropdownActive });
  },

  render: function() {
    return (
      <nav className='navbar navbar-inverse'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <Link className='navbar-brand' to='/'>
              Tour of Earthquakes
            </Link>
          </div>

          <ul className='nav navbar-nav navbar-right requester-dropdown'>
            <li className='dropdown'>
              <a href='#' className='dropdown-toggle'
                onClick={this.onDropdownToggle}
                >
                Requester

                {' '}

                <span className='caret'></span>
              </a>
            </li>

            <div className={this.state.dropdownActive
              ? 'dropdown-menu show'
              : 'dropdown-menu'}
              >
              <ConnectedTimePeriodRequester />
            </div>
          </ul>
        </div>
      </nav>
    );
  }
});

export default Header;

