// var assert = require('assert');
window.assert = chai.assert;

describe('My first test with Mocha framework only', function() {
  describe('Simple data types with the same value', function() {
    it('should equal each other', function() {
      assert.equal(6, 6);
    });
  });
});

describe('My second test with Chai library', function() {
  describe('Complex data types with the same value', function() {
    it('should deep equal each other', function() {
      assert.deepEqual({ tea: 'green' }, { tea: 'green' });
    });
  });
});

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
  });

  describe('submit function', function() {
    it('should exist', function() {
      assert.exists(gasCtrl.submit);
    });
    it('should get previousMileage, currentMileage, gallons, pricePerGallon', function(){
      // gasCtrl.submit()
    });
    it('should calculate milesDriven, MPG, totalSpent');
  });
});