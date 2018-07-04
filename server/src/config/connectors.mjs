import uport from 'uport';

import config from './config.mjs';

const signer = uport.SimpleSigner(config.uport.signingKey);

const signingKey = '5abe91773a75014729696cd5405c34e4ef921027b2034835df82308c9da2fec6';
const clientId = '2ouCeqZBdGxTF7FrF3CCT4JQoNHtbnjfyGp';
const network = 'rinkeby';

export const uportConn = new uport.Credentials({
  appName: config.uport.name,
  address: config.uport.address,
  signer
});

export const web3 = uport.getWeb3();
