var assert = require('assert');
describe('My first test', function() {
  describe('Simple data types with the same value', function() {
    it('should equal each other', function() {
      assert.equal(6, 6);
    });
  });
});