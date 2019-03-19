var request = require('supertest');
var app = require('../app.js');
subhas newar

describe('GET /', function() {
  it('respond with nodejs-lab', function(done) {
    request(app).get('/').expect('hello nodejs', done);
  });
});
