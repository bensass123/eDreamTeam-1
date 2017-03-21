'use strict';
// dependencies
var assert = require('assert');
var request = require('supertest');
var app = require('../app');
var should = require('chai').should();

/***** BEGIN TESTS *****/

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('GET /test', function() {
  it('should should return a json object array', function(done) {
    request(app)
      .get('/test')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) done(err);
        res.body.should.be.an('array');
        done();
      });
  });
});