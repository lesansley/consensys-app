import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const LogoutButton = ({ onLogoutUserClick }) => {
  return(
    <Link
      className='item'
      to='/'
      name='logout'
      onClick={onLogoutUserClick}>
      Log out
    </Link>
  );
};

LogoutButton.propTypes = {
  onLogoutUserClick: PropTypes.func.isRequired
};

export default LogoutButton;
