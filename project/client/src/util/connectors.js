import {
  Connect,
  SimpleSigner
} from 'uport-connect';

const signingKey = '5abe91773a75014729696cd5405c34e4ef921027b2034835df82308c9da2fec6';
const clientId = '2ouCeqZBdGxTF7FrF3CCT4JQoNHtbnjfyGp';
const network = 'rinkeby';

export const uport = new Connect('Project App', {
  clientId,
  network,
  signer: SimpleSigner(signingKey)
});

export const web3 = uport.getWeb3();
