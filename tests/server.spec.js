process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server.js';


chai.use(chaiHttp);

describe('SERVER TEST', () => {
  it('should return a string on default url path', (done) => {
    chai.request(app)
      .get('/')
      .end((error, response) => {
        chai.expect(response).to.have.status(200);
        done();
      });
  });

  it('should return 404 on not found request', (done) => {
    chai.request(app)
      .get('/xyz')
      .end((error, response) => {
        chai.expect(response).to.have.status(404);
        done();
      });
  });
});
