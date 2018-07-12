// ADD APP CONFIG SETTINGS HERE
const url = process.env.MONGO_MLAB__URL || 'ds131711.mlab.com = 31711';
const user = process.env.MONGO_MLAB__USER || 'identik8_user';
const password = process.env.MONGO_MLAB__PASS || 'gangland_spoon_drover1';
const name = process.env.MONGO_MLAB__NAME || 'identik8';

const config = {
  port: process.env.PORT || 9004,
  apiRootUrl: 'http://42265f5d.ngrok.io',
  db: {
    url,
    user,
    password,
    name,
    uri: `mongodb://${user}:${password}@${url}/${name}`
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  },
  uport: {
    name: 'Project App',
    signingKey:
      '5abe91773a75014729696cd5405c34e4ef921027b2034835df82308c9da2fec6',
    clientId: '2ouCeqZBdGxTF7FrF3CCT4JQoNHtbnjfyGp',
    network: 'rinkeby'
  }
};

export default config;
