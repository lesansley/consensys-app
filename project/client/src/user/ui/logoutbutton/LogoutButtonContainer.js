import { connect } from 'react-redux';
import LogoutButton from './LogoutButton';
import { logoutUser } from './LogoutButtonActions';

const mapDispatchToProps = dispatch => {
  return {
    onLogoutUserClick: event => {
      event.preventDefault();
      dispatch(logoutUser());
    }
  };
};

const LogoutButtonContainer = connect(
  null,
  mapDispatchToProps
)(LogoutButton);

export default LogoutButtonContainer;
