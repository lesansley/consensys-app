import uport from 'uport';

import config from './config.mjs';

const signer = uport.SimpleSigner(config.uport.signingKey);

const uportConn = new uport.Credentials({
  appName: config.uport.name,
  address: config.uport.clientId,
  signer
  // networks: {'0x4': {'registry' : '0x2cc31912b2b0f3075a87b3640923d45a26cef3ee', 'rpcUrl' : 'https://rinkeby.infura.io'}}
  // Note: uPort uses Rinkeby by default, the above is the explicit format for selecting a network
});

export default {
  uportConn
};
