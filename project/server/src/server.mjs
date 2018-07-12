import http from 'http';

import app from './app';
import config from './config/config';

const httpserver = http.createServer(app);

const server = () => {
	httpserver.listen(config.port, () => {
		console.log(`Listening on Port ${config.port}`);
	});
};
export default server;
