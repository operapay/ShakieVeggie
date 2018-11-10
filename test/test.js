var assert = require('assert');
let User = require('../models/user');
const add = (x, y) => (+x) + (+y);

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

it('correctly calculates the sum of 1 and 3', () => {
    assert.equal(add(1, 3), 4);
  });