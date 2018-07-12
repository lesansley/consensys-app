import attestHandler from './handlers/attestHandler';
import initiateRequest from './handlers/initiateRequest';
import manageRequest from './handlers/manageRequest';
import fulfillRequest from './handlers/fulfillRequest';

const routes = app => {
	app.post('/', async (req, res) => {
		const response = await initiateRequest(req);

		res.status(200).json(response);
	});

	app.post('/attest', async (req, res) => {
		const response = await attestHandler(req);

		res.status(200).json(response);
	});

	app.post('/request', async (req, res) => {
		const response = await attestHandler(req);

		res.status(200).json(response);
	});

	app.post('/callback/:ref', async (req, res) => {
		const response = manageRequest(req);
		if (response.ok) {
			res.status(200);
		}
		response = await response.json();
		res.status(400).json({
			title: 'Unexpected response',
			message: JSON.stringify(response)
		});
	});

	app.post('/:ref', async (req, res) => {
		const response = await fulfillRequest(req);

		res.status(200).json(response);
	});
};

export default routes;
