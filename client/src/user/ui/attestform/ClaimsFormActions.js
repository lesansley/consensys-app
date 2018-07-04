import { browserHistory } from 'react-router';

import { uport } from './../../../util/connectors.js';

export const USER_CLAIMS = 'USER_CLAIMS';

function credAttest(claims) {
  return {
    type: USER_CLAIMS,
    payload: claims
  };
}

export function userClaims(data) {
  // SEND TO BACKEND TO VERIFY CLAIMS
  // THEN ATTEST THE CREDENTIALS
  return async function (dispatch) {
    const response = await uport.attestCredentials({
      sub: data.address,
      claim: {
        mobile: {
          area: 'cape town'
        }
      } // We want this if we want to recieve credentials
    });

    console.log(response);
    // Attest credentials.
    dispatch(credAttest(response));

    // Redirect to profile.
    return browserHistory.push('/profile');
  };
}
