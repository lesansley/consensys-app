import api from '../../../utils/api';

const loginUser = async userLogin => {
  // DISPLAY QR CODE
  const response = await api.requestApi({
    type: 'request',
    attributes: []
  });
  const { web, mobile, ref } = await response.json();

  otaConnector({ web, mobile });

  const cred = api.pollRequestApi(ref);

  userLogin(cred);
  // Used a manual redirect here as opposed to a wrapper.
  // This way, once logged in a user can still access the home page.
  //const currentLocation = window.location;

  // if ('redirect' in currentLocation.query) {
  //   return history.push(decodeURIComponent(currentLocation.query.redirect));
  // }
  // return history.push('/dashboard');
};

export default loginUser;
