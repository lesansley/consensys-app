import http from 'http';

import app from './app';
import config from './config/config';

const server = http.createServer(app);

export default () => {
  server.listen(config.port, () => {
    console.log(`Listening on Port ${config.port}`);
  });
}
