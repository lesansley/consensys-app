import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const LoginButton = ({ onLoginUserClick }) => {
  return (
    <Link
      className='item'
      to='/'
      name='login'
      onClick={onLoginUserClick}>
      Log in
    </Link>
  );
};

LoginButton.propTypes = {
  onLoginUserClick: PropTypes.func.isRequired
};

export default LoginButton;
