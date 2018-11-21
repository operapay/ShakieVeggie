var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');

var expect = chai.expect;

chai.use(chaiHttp);

describe('User Register', function() {
    const mockUser = {
        firstname:'paytest',
        lastname:'testja',
        email: 'test@gmail.com',
        phone: '0875448742',
        username: 'operatest',
        password: '1234',
    };
    it('register', function(done) {
        chai.request(app)
        .post('/users/register')
        .send(mockUser)
        .end(function(err, res) {
            expect(res).to.have.status(200);
            expect(res.request._data.username).to.equal(mockUser.username);
            expect(res.request._data.password).to.equal(mockUser.password);
            done();
        });
    });
});