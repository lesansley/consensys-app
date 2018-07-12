import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../../actions';
import loginUser from './LoginButtonActions';
import LoginButton from './LoginButton';

class LoginButtonContainer extends Component {
  onLoginUserClick = ev => {
    ev.preventDefault();
    loginUser(this.props.userLogin);
  };

  render() {
    return <LoginButton onClick={this.onLoginUserClick} />;
  }
}

LoginButtonContainer.propTypes = {
  userLogin: PropTypes.func.isRequired
};

export default connect(
  null,
  actions
)(LoginButtonContainer);
