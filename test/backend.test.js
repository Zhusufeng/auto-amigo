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

// describe('Database', () => {
//   describe('connection', () => {
//     it('should connect to database', (done) => {
//       // chai.request(server)
//       // .get('/')
//       // .end((err, res) => {
//       //   expect(res).to.have.status(200);
//       //   done();
//       // });
//     });
//   });

  /* ---------------------------------------- */
  /*              USER ENDPOINT              */
  /* ---------------------------------------- */

  describe('Users', () => {


    describe('GET /user', () => {  
      it('should GET all the users', (done) => {
        chai.request(server)
          .get('/user')
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });

    describe('POST /user', () => {  
      it('should POST a new user', (done) => {
        let fakeUser = {
          "userid": "123",
          "firstName": "John",
          "lastName": "Smith",
          "email": "johnsmith@gmail.com",
          "password": "password",
          "cars": [
            {
              "carMake": "Toyota",
              "carModel": "Corolla",
              "carYear": "2017",
              "gas": {
                "111817": {
                  "previousMileage": "10000",
                  "currentMileage": "10500",
                  "milesDriven": "500",
                  "gallons": "15",
                  "MPG": "33.33",
                  "pricePerGal": "3",
                  "total": "45"
                }
              }
            }
          ]
        };

        chai.request(server)
          .post('/user')
          .send(fakeUser)
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.text.should.equal('You made a POST to the /user endpoint');
            done();
          });
      });
    });

  //   describe('GET /user/:userid', () => {  
  //     it('should GET a user by the given id', (done) => {
  //     });
  //   });

  //   describe('PUT /user/:userid', () => {  
  //     it('should UPDATE a user given the id', (done) => {
  //     });
  //   });

  //   describe('DELETE /user/:userid', () => {  
  //     it('should DELETE a user given the id', (done) => {
  //     });
  //   });
  });

  /* ---------------------------------------- */
  /*               GAS ENDPOINT               */
  /* ---------------------------------------- */
  describe('Gas', () => {
    describe('GET /gas', () => {  
      it('should GET all the gas entries', (done) => {
        chai.request(server)
        .get('/gas')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
      });
    });

    describe('POST /gas', () => {  
      it('should POST a new gas entry', (done) => {
        let fakeGas = {
          date: '11/22/17',
          previousMileage: 89500,
          currentMileage: 90000,
          milesDriven: 500,
          gallons: 15,
          MPG: 33.33,
          pricePerGallon: 3,
          totalSpent: 45
        };

        chai.request(server)
          .post('/gas')
          .send(fakeGas)
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.text.should.equal('You made a POST to the /gas endpoint');
            done();
          });
      });
    });

  //   describe('GET /gas/:userid', () => {  
  //     it('should GET a user\'s gas log given userid', (done) => {
  //     });
  //   });

  //   describe('GET /gas/:userid/:gasid', () => {  
  //     it('should GET a gas entry given userid and gasid', (done) => {
  //     });
  //   });

  //   describe('PUT /gas/:userid/:gasid', () => {  
  //     it('should UPDATE a gas entry given the userid and gasid', (done) => {
  //     });
  //   });

  //   describe('DELETE /gas/:userid/:gasid', () => {  
  //     it('should DELETE a gas entry given the userid and gasid', (done) => {
  //     });
  //   });
  });

  // /* ---------------------------------------- */
  // /*           MAINTENANCE ENDPOINT           */
  // /* ---------------------------------------- */
  // describe('Maintenance', () => {
  //   describe('GET /maintenance', () => {  
  //     it('should GET all the maintenance entries', (done) => {
  //     });
  //   });

  //   describe('POST /maintenance', () => {  
  //     it('should POST a new maintenance entry', (done) => {
  //     });
  //   });

  //   describe('GET /maintenance/:userid', () => {  
  //     it('should GET a user\'s maintenance log given userid', (done) => {
  //     });
  //   });

  //   describe('GET /maintenance/:userid/:maintenanceid', () => {  
  //     it('should GET a maintenance entry given userid and maintenanceid', (done) => {
  //     });
  //   });

  //   describe('PUT /maintenance/:userid/:maintenanceid', () => {  
  //     it('should UPDATE a maintenance entry given the userid and maintenanceid', (done) => {
  //     });
  //   });

  //   describe('DELETE /maintenance/:userid/:maintenanceid', () => {  
  //     it('should DELETE a maintenance entry given the userid and maintenanceid', (done) => {
  //     });
  //   });
  // });
// });