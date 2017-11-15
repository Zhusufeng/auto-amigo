// Require dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server/server');
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

describe('Server', () => {
  describe('connection', () => {
    it('should connect to server', (done) => {
      chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
    });
  });
});