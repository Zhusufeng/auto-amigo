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

describe('Database', () => {
  describe('connection', () => {
    it('should connect to database', (done) => {
      // chai.request(server)
      // .get('/')
      // .end((err, res) => {
      //   expect(res).to.have.status(200);
      //   done();
      // });
    });
  });

  /* ---------------------------------------- */
  /*              USERS ENDPOINT              */
  /* ---------------------------------------- */

  describe('Users', () => {
    describe('GET /users', () => {  
      it('should GET all the users', (done) => {
      });
    });

    describe('POST /users', () => {  
      it('should POST a new user', (done) => {
      });
    });

    describe('GET /users/:userid', () => {  
      it('should GET a user by the given id', (done) => {
      });
    });

    describe('PUT /users/:userid', () => {  
      it('should UPDATE a user given the id', (done) => {
      });
    });

    describe('DELETE /users/:userid', () => {  
      it('should DELETE a user given the id', (done) => {
      });
    });
  });

  /* ---------------------------------------- */
  /*               GAS ENDPOINT               */
  /* ---------------------------------------- */
  describe('Gas', () => {
    describe('GET /gas', () => {  
      it('should GET all the gas entries', (done) => {
      });
    });

    describe('POST /gas', () => {  
      it('should POST a new gas entry', (done) => {
      });
    });

    describe('GET /gas/:userid', () => {  
      it('should GET a user\'s gas log given userid', (done) => {
      });
    });

    describe('GET /gas/:userid/:gasid', () => {  
      it('should GET a gas entry given userid and gasid', (done) => {
      });
    });

    describe('PUT /gas/:userid/:gasid', () => {  
      it('should UPDATE a gas entry given the userid and gasid', (done) => {
      });
    });

    describe('DELETE /gas/:userid/:gasid', () => {  
      it('should DELETE a gas entry given the userid and gasid', (done) => {
      });
    });
  });
});