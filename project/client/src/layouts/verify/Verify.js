import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Verify extends Component {

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Verify</h1>
            <p>If you're seeing this page, you need to verify your identity on the blockchain.</p>
          </div>
        </div>
      </main>
    );
  }
}

Verify.propTypes = {
  authData: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Verify;
