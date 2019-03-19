var request = require('supertest');
var app = require('../app.js');
changed for webhooks

describe('GET /', function() {
  it('respond with nodejs-lab', function(done) {
    request(app).get('/').expect('hello nodejs', done);
  });
});
