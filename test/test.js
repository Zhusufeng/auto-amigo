// var assert = require('assert');
window.assert = chai.assert;

// describe('My first test with Mocha framework only', function() {
//   describe('Simple data types with the same value', function() {
//     it('should equal each other', function() {
//       assert.equal(6, 6);
//     });
//   });
// });

// describe('My second test with Chai library', function() {
//   describe('Complex data types with the same value', function() {
//     it('should deep equal each other', function() {
//       assert.deepEqual({ tea: 'green' }, { tea: 'green' });
//     });
//   });
// });

describe('Testing gasCtrl', function() {

  // Define variables we want access to
  var gasCtrl;

  beforeEach(function() {
    // Load the module
    module('index');

    // Inject
    inject(function($controller) {
      gasCtrl = $controller('gasCtrl');
      console.log('gasCtrl is ', gasCtrl);
    });
  });

  describe('gaslog', function() {
    it('should exist', function() {
      assert.exists(gasCtrl.gaslog);
    });
    it('should be an array', function() {
      assert(Array.isArray(gasCtrl.gaslog));
    });
  });

  describe('submit function', function() {
    it('should exist', function() {
      assert.exists(gasCtrl.submit);
    }); 
  });

  describe('createDate function', function() {
    it('should exist', function() {
      assert.exists(gasCtrl.createDate);
    });
    it('should return a string', function() {
      assert.strictEqual(gasCtrl.createDate().constructor, String);
    }); 
  });

  describe('calculateStats function', function() {
    it('should exist', function() {
      assert.exists(gasCtrl.calculateStats);
    });
    it('should return an object', function() {
      assert.strictEqual(gasCtrl.calculateStats().constructor, Object);
    }); 
    it('should calculate milesDriven, MPG and totalSpent', function() {
      const actual = gasCtrl.calculateStats(1000, 500, 15, 3);
      const expected = {milesDriven: 500, MPG: 33.33, totalSpent: 45.00};
      console.log('actual is ', actual);
      console.log('expected is ', expected);
      assert.deepEqual(actual, expected);
    }); 
    
  });
});

describe('Testing server', function() {

});