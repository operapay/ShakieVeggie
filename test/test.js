var should = require('chai').should();
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

// describe('#find()', function(){
//     it('respond with matching records', function(done){
//         User.find({ type: 'username' }, function(err, res){
//             res.should.have.length(3);
//         })
//     })
// })