import { browserHistory } from 'react-router';

import { uport } from './../../../util/connectors.js';

export const USER_LOGGED_IN = 'USER_LOGGED_IN';
function userLoggedIn(user) {
  return {
    type: USER_LOGGED_IN,
    payload: user
  };
}

export function loginUser() {
  return async dispatch => {
    // UPort and its web3 instance are defined in ./../../../util/wrappers.
    // Request uPort persona of account passed via QR
    // const credentials = await uport.requestCredentials({
    //   requested: ['name', 'phone', 'country', 'mobile'],
    //   notifications: true // We want this if we want to recieve credentials
    // });http://97173b91.ngrok.io/request
    const credentials = await fetch('http://localhost:9004/request', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({init: 1})
    })
    console.log(credentials);
    dispatch(userLoggedIn(credentials));
    // Used a manual redirect here as opposed to a wrapper.
    // This way, once logged in a user can still access the home page.
    var currentLocation = browserHistory.getCurrentLocation();
    if ('redirect' in currentLocation.query) {
      return browserHistory.push(decodeURIComponent(currentLocation.query.redirect));
    }
    return browserHistory.push('/dashboard');
  };
}
