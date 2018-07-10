import connectors from '../config/connectors';
import config from '../config/config';
import helpers from '../utils/helpers.mjs';

const uportConn = connectors.uportConn;
const otaLinks = helpers.otaLinks;

const attestHandler = async req => {
  const token = uportConn.attest({
    sub: config.clientId,
    claim: req.claim
  });
  return otaLinks(token);
};

export default attestHandler;
