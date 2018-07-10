import React from 'react';

import androidAppLogo from '../img/android-app-logo.svg';

const AndroidApp = () => {
  return (
    <a href='https://play.google.com/store/apps/details?id=com.uportMobile' target='_blank'>
      <div
        style={{
          width: '128px',
          height: '40px',
          margin: '0 10 px',
          display: 'block'
        }}
      >
        <img className="android-logo" src={androidAppLogo} alt="Play store Logo" />
      </div>
    </a>
 );
};

export default AndroidApp;
