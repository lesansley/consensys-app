import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import AttestFormContainer from '../../ui/attestform/ClaimsFormContainer';

const Profile = props => {
  return (
    <main className="container">
      <h1>Profile</h1>
      <p>Change these details in UPort to see them reflected here.</p>
      <Card
        link
        onClick={() => console.log('Show Blockchain entry')}
        header={props.authData.name}
        meta='Name'
        description='Some information here.'
      />
      <AttestFormContainer address={props.authData.address}/>
    </main>
  );
};

Profile.propTypes = {
  authData: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string.isRequired
  }).isRequired
};

export default Profile;
