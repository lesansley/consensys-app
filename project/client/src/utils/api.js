import config from '../config/config';
import urljoin from 'url-join';

const { apiRootUrl } = config;

/**
 * Requests qrCode & link from uport server
 *
 * @method requestApi
 * @param {object} payload
 *	@param {number} exp value in seconds until the request expires (default === 300)
 * 	@param {string} type request || verify
 * 	@param {array} attributes Array of attributes requested from the user e.g.['First name', 'Last name', 'Date of birth', 'Home address'] Naming conventions follow the https://schema.org schema
 * @returns
 */
export const requestApi = async payload => {
  const response = await fetch(urljoin(apiRootUrl, payload.type), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      init: 1,
      payload
    })
  });
  if (response.ok) {
    return await response.json();
  }
  // Put in a redirect to an Oops page
};

export const pollRequestApi = ref => {
  const pollApi = (resolve, reject) => {
    fetch(urljoin(apiRootUrl, ref), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        init: 1
      })
    }).then(response => {
      if (response.result === 'wait') {
        pollApi(resolve, reject);
      } else {
        resolve(response);
      }
    });
  };

  return new Promise(pollApi);
};
