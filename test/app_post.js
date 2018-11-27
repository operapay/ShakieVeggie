'use strict'
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
//var router = require('../app/admin');

var expect = chai.expect;

chai.should();

chai.use(chaiHttp);

// describe('App Post', function() {
//   describe('post health condition', function() {
//     it('responds with status 200', function(done) {
//       chai.request(app)
//         .post('/custom/5bf2cbb4b3f3ab45889c82ea/5bf262f159f86d3d406b803b')
//         .end(function(err, res) {
//           expect(res).to.have.status(200);
//           done();
//         });
//     });
//   });
//   describe('confirm cart', function() {
//     it('responds with status 200', function(done) {
//       chai.request(app)
//         .post('/cart/5bf2cbb4b3f3ab45889c82ea/5bf262f159f86d3d406b803b')
//         .end(function(err, res) {
//           expect(res).to.have.status(200);
//           done();
//         });
//     });
//   });
//   describe('edit cart', function() {
//     it('responds with status 200', function(done) {
//       chai.request(app)
//         .post('/cart/edit/5bf2cbb4b3f3ab45889c82ea/5bf262f159f86d3d406b803b')
//         .end(function(err, res) {
//           expect(res).to.have.status(200);
//           done();
//         });
//     });
//   });
//   describe('post payment', function() {
//     it('responds with status 200', function(done) {
//       chai.request(app)
//         .post('/payment/5bf2cbb4b3f3ab45889c82ea')
//         .end(function(err, res) {
//           expect(res).to.have.status(200);
//           done();
//         });
//     });
//   });
// });

function totalprice(items){
    return ((items*75)+30)
}

describe('test total price', function() {
    it('return total price passes function',function(){
        totalprice(2).should.equal(180);
    })
});