import connectors from '../config/connectors';
import config from '../config/config';
import helpers from '../utils/helpers.mjs';

const uportConn = connectors.uportConn;
const otaLinks = helpers.otaLinks;

const requestHandler = async req => {
  if (req.body.init) {
    const token = await uportConn.createRequest({
      callbackUrl: `${config.apiRoot}:${config.port}/request`,
      exp: Math.floor(new Date().getTime() / 1000) + 300
    })
    return otaLinks(token);
  } else {
    const jwt = req.body.access_token;
    const credentials = await uportConn.receive(jwt);
    return credentials;
  }
}

export default requestHandler;
