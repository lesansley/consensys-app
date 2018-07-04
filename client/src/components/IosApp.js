import React from 'react';

import iosApp from '../img/ios-app-logo.svg';

const IosApp = () => {
  return (
    <a href='https://itunes.apple.com/us/app/uport-id/id1123434510?mt=8' target='_blank'>
      <div
        style={{
          width: '128px',
          height: '40px',
          display: 'inline-block'
        }}
      >
        <img className="uport-logo" src={iosApp} alt="iOS App Logo" />
      </div>
    </a>
 );
};

export default IosApp;
