import connectors from '../config/connectors';

const uportConn = connectors.uportConn;

/**
 * To return user credentials
 * @method fulfillRequest
 * @param {string} token Encoded JWT containing user credentials
 * @returns {object}
 */
const fulfillRequest = async token => {
  const credentials = await uportConn.receive(token);

  if (credentials.verified && credentials.verified.length > 0) {
    if (credentials.address === credentials.verified[0].sub) {
      return {
        result: 'success',
        user: credentials
      };
    }
    return {
      result: 'fail'
    };
  }
  return {
    result: 'none'
  };
};

export default fulfillRequest;
