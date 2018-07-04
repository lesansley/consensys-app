import url from 'url';

const routes = app => {
  app.post('/createrequest', (req, res) => {
    res.status(200).json({result: 'success'});
  })
  app.get('/', (req, res) => {
    res.status(200).json({
      result: 'success'
    });
  })
};

export default routes;