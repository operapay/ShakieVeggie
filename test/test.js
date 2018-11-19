let mongoose = require("mongoose");
let Book = require('../models/user');

let chai = require('chai');
let chaiHttp = require('chai-http');
//let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);

describe('Books', () => {
  describe('/GET book', () => {
      it('it should POST a book ', (done) => {
          let book = {
              title: "The Lord of the Rings",
              author: "J.R.R. Tolkien",
              year: 1954,
              pages: 1170
          }
        chai.request('http://localhost:3000')
            .post('/book')
            .send(book)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('objsect');
                  res.body.should.have.property('message').eql('Book successfully added!');
                  res.body.book.should.have.property('title');
                  res.body.book.should.have.property('author');
                  res.body.book.should.have.property('pages');
                  res.body.book.should.have.property('year');
              done();
            });
      });
  });
});