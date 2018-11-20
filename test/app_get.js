var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
//var router = require('../app/admin');

var expect = chai.expect;

chai.use(chaiHttp);

describe('App Get', function() {
  describe('get index', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
        .get('/')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe('get aboutus', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
        .get('/admin/aboutus')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe('get formula', function() {
    it('responds with status 200', function(done) {
      chai.request(app)
        .get('/formulas/5bf2cbb4b3f3ab45889c82ea')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});