import connectors from '../config/connectors';
import config from '../config/config';
import otaComm from '../utils/otaComm';

const uportConn = connectors.uportConn;

const attestHandler = async req => {
	const token = uportConn.attest({
		sub: config.clientId,
		claim: req.claim
	});

	return otaComm(token);
};

export default attestHandler;
