import { connect } from 'react-redux';
import LoginButton from './LoginButton';
import { loginUser } from './LoginButtonActions';

const mapDispatchToProps = dispatch => {
  return {
    onLoginUserClick: ev => {
      ev.preventDefault();
      dispatch(loginUser());
    }
  };
};

const LoginButtonContainer = connect(
  null,
  mapDispatchToProps
)(LoginButton);

export default LoginButtonContainer;
