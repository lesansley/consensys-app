import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const LoginButton = ({ onLoginUserClick }) => {
  return (
    <Button name="login" onClick={onLoginUserClick}>
      Log in
    </Button>
  );
};

LoginButton.propTypes = {
  onLoginUserClick: PropTypes.func.isRequired
};

export default LoginButton;
