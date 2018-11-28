
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
//var router = require('../app/admin');

var expect = chai.expect;

chai.use(chaiHttp);

describe('User Get', function() {
  describe('get login', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
        .get('/users/login')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe('get register', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
        .get('/users/register')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe('get logout', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
        .get('/users/logout')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});