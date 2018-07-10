import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';

import { HiddenOnlyAuth, VisibleOnlyAuth } from './util/wrappers.js';

// UI Components
import LoginButtonContainer from './user/ui/loginbutton/LoginButtonContainer';
import LogoutButtonContainer from './user/ui/logoutbutton/LogoutButtonContainer';

// Styles
import './App.css';

class App extends Component {
  render() {
    const OnlyAuthLinks = VisibleOnlyAuth(() =>
      <Menu.Menu position='right'>
        <Menu.Item>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item>
          <LogoutButtonContainer />
        </Menu.Item>
      </Menu.Menu>
    );

    const OnlyGuestLinks = HiddenOnlyAuth(() =>
      <Menu.Menu position='right'>
        <Menu.Item>
          <LoginButtonContainer />
        </Menu.Item>
      </Menu.Menu>
    );

    return (
      <main>
        <Menu borderless>
          <Menu.Item header>
            <Link to="/">Identik8</Link>
          </Menu.Item>
          <OnlyGuestLinks />
          <OnlyAuthLinks />
        </Menu>
        {this.props.children}
      </main>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
