import connectors from '../config/connectors';
import config from '../config/config';
import helpers from '../utils/helpers.mjs';

const uportConn = connectors.uportConn;
const otaLinks = helpers.otaLinks;

const verifyHandler = async req => {
  if (req.attr) {
    const token = await uportConn.createRequest({
      verified: req.attr,
      callbackUrl: `${config.apiRoot}:${config.port}/verify`,
      exp: Math.floor(new Date().getTime() / 1000) + 300
    })
    return otaLinks(token);
  } else {
    const jwt = req.body.access_token;
    const credentials = await uportConn.receive(jwt);
    if (creds.verified && creds.verified.length > 0) {
      if (creds.address == creds.verified[0].sub) {
        return {result: 'success'};
      } else {
        return {result: 'fail'};
      }
    } else {
      return {result: 'none'};
    }
  }
};

export default verifyHandler;
