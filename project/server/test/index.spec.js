import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import request from 'supertest';

import app from '../src/app';

chai.use(chaiAsPromised);
chai.expect();

expect('POST /request', () => {
  it('should return', done => {
    const payload = {
      init: 1
    };
  });
});
