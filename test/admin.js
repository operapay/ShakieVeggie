
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
//var router = require('../app/admin');

var expect = chai.expect;

chai.use(chaiHttp);

describe('Admin Get', function() {
    it('payment status table', function(done) {
      chai.request(app)
        .get('/admin/payment')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
    it('mixing status table', function(done) {
      chai.request(app)
        .get('/admin/mixing')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
    it('sending status table', function(done) {
      chai.request(app)
        .get('/admin/sending')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
});