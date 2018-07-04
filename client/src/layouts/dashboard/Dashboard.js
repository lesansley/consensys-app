import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let nextState = Object.assign({prevState});
    if (nextProps.authData) nextState.authData = nextProps.authData;
    return nextState;
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <p>Congratulations <strong>{this.props.authData.name}!</strong>
              If you're seeing this page, you've logged in with UPort successfully.</p>
          </div>
        </div>
      </main>
    );
  }
}

Dashboard.propTypes = {
  authData: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Dashboard;
