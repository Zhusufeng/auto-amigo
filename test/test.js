var assert = require('assert');

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

describe('gasCtrl', function() {

  // Define variables we want access to
  var gasCtrl;

  beforeEach(function() {
    // Load the module
    module('index');

    // Inject
    inject(function($controller) {
      gasCtrl = $controller('gasCtrl');
      console.log(gasCtrl);
    });
  });

  describe('controller', function() {
    it('should have an array that will keep the gas log history', function() {
      assert.exists(index.gaslog);
    });
  })
});