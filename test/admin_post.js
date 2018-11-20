var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
//var router = require('../app/admin');

var expect = chai.expect;

chai.use(chaiHttp);

describe('Admin Post', function() {
  describe('post clear payment table', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
        .post('/admin/clearpayment')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe('post clear mixing table', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
        .post('/admin/clearmixing')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe('post clear sending table', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
        .post('/admin/clearsending')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});