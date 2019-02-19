
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
//var router = require('../app/admin');

var expect = chai.expect;

chai.use(chaiHttp);

// describe('Clear Table', function() {
//     it('Clear payment', function(done) {
//         chai.request(app)
//         .post('/admin/clearpayment')
//         .end(function(err, res) {
//             expect(res).to.have.status(200);
//             done();
//         });
//     });
//     it('clear mixing', function(done) {
//         chai.request(app)
//         .post('/admin/clearmixing')
//         .end(function(err, res) {
//             expect(res).to.have.status(200);
//             done();
//         });
//     });
//     it('clear sending', function(done) {
//         chai.request(app)
//         .post('/admin/clearsending')
//         .end(function(err, res) {
//             expect(res).to.have.status(200);
//             done();
//         });
//     });
// });