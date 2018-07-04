import { connect } from 'react-redux';

import ClaimsForm from './ClaimsForm';
import { userClaims } from './ClaimsFormActions';

const mapDispatchToProps = dispatch => {
  return {
    onClaimsFormSubmit: data => {
      dispatch(userClaims(data));
    }
  };
};

const ClaimsFormContainer = connect(
  null,
  mapDispatchToProps
)(ClaimsForm);

export default ClaimsFormContainer;
