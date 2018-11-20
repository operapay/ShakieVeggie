var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
//var router = require('../app/admin');

var expect = chai.expect;

chai.use(chaiHttp);

describe('Admin Get', function() {
  describe('get payment status table', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
        .get('/admin/payment')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe('get mixing status table', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
        .get('/admin/mixing')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe('get sending status table', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
        .get('/admin/sending')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});