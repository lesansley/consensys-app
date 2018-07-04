import attestHandler from './handlers/attestHandler';
import requestHandler from './handlers/requestHandler';
import verifyHandler from './handlers/verifyHandler';

const routes = app => {
  app.post('/request', async (req, res) => {
    const response = await requestHandler(req);
    res.status(200).json(response);
  });

  app.post('/attest', async (req, res) => {
    const response = await attestHandler(req);
    res.status(200).json(response);
  });

  app.post('/verify', async (req, res) => {
    const response = await verifyHandler(req);
    res.status(200).json(response);
  });
};

export default routes;
