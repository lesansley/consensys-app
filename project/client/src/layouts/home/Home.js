import React, { Component } from 'react';

import { AndroidApp, IosApp } from '../../components';
class Home extends Component {
  render() {
    return(
      <main className='container'>
        <div className='pure-g'>
          <div className='pure-u-1-1'>
            <h1>Welcome to Identik8</h1>
            <h2>UPort Authentication</h2>
            <p>In order to continue you will need to install the UPort app on your mobile phone.</p>
            <div>
              <AndroidApp />
              <IosApp />
            </div>
            <p>If you have already installed the UPort app click the login button in the upper-right corner.
              You will be directed to your Dashboard.</p>
            <p>Remember that none of your personal data is stored anywhere except on your device. The Dashboard is
              just displaying that information to you.
              As soon as you logout or close the browser page
              your personal data will no longer be available to the browser.</p>
            <h3>Redirect Path</h3>
            <p>This example redirects home ('/') when trying to access an authenticated route without first
              authenticating. You can change this path in the failureRedirectUrl property of the UserIsAuthenticated
              wrapper on <strong>line 9</strong> of util/wrappers.js.</p>
            <h3>Accessing User Data</h3>
            <p>Once authenticated, any component can access the user's data by assigning the authData object to a
              component's props.</p>
            <pre><code>
              {'// In components constructor.'}<br/>
              {'constructor(props, { authData }) {'}<br/>
              {'  super(props)'}<br/>
              {'  authData = this.props'}<br/>
              {'}'}<br/><br/>
              {'// Use in component.'}<br/>
              {'Hello { this.props.authData.name }!'}
            </code></pre>
            <h3>Further Reading</h3>
            <p>The React/Redux portions of the authentication fuctionality are provided by
              <a href='https://github.com/mjrussell/redux-auth-wrapper' target='_blank'>
                mjrussell/redux-auth-wrapper
              </a>.</p>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
