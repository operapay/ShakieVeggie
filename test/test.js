var chai = require('chai');
var expect = chai.expect;

chai.should();
function totalprice(items){
  return ((items*75)+30)
}

describe('test total price', function() {
  it('return total price passes function',function(){
    totalprice(2).should.equal(180);
  })
});