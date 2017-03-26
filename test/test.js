'use strict';

//During the test the env variable is set to test
//process.env.NODE_ENV = 'test';

// dependencies
var assert = require('assert');
var request = require('supertest');
var app = require('../app');
var should = require('chai').should();

/**
 * TEST API GET ROUTES
 */

// test
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

// easies
// describe('GET /api/easies', function() {
//   it('should should return a json object array', function(done) {
//     request(app)
//       .get('/api/easies')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200)
//       .end(function(err, res) {
//         if (err) done(err);
//         res.body.should.be.an('array');
//         done();
//       });
//   });
// });

// funnies
// describe('GET /api/funnies', function() {
//   it('should should return a json object array', function(done) {
//     request(app)
//       .get('/api/funnies')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200)
//       .end(function(err, res) {
//         if (err) done(err);
//         res.body.should.be.an('array');
//         done();
//       });
//   });
// });

// hards
// describe('GET /api/hards', function() {
//   it('should should return a json object array', function(done) {
//     request(app)
//       .get('/api/hards')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200)
//       .end(function(err, res) {
//         if (err) done(err);
//         res.body.should.be.an('array');
//         done();
//       });
//   });
// });

// indicies
// describe('GET /api/indicies', function() {
//   it('should should return a json object array', function(done) {
//     request(app)
//       .get('/api/indicies')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200)
//       .end(function(err, res) {
//         if (err) done(err);
//         res.body.should.be.an('array');
//         done();
//       });
//   });
// });

// intermediate
// describe('GET /api/intermediate', function() {
//   it('should should return a json object array', function(done) {
//     request(app)
//       .get('/api/intermediate')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200)
//       .end(function(err, res) {
//         if (err) done(err);
//         res.body.should.be.an('array');
//         done();
//       });
//   });
// });

// quotes
// describe('GET /api/quotes', function() {
//   it('should should return a json object array', function(done) {
//     request(app)
//       .get('/api/quotes')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200)
//       .end(function(err, res) {
//         if (err) done(err);
//         res.body.should.be.an('array');
//         done();
//       });
//   });
// });

// reddits
// describe('GET /api/reddits', function() {
//   it('should should return a json object array', function(done) {
//     request(app)
//       .get('/api/reddits')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200)
//       .end(function(err, res) {
//         if (err) done(err);
//         res.body.should.be.an('array');
//         done();
//       });
//   });
// });

/**
 * TEST API POST ROUTES
 */

// test
// describe('POST /test', function() {
//   it('should should return a response with title property', function(done) {
//     request(app)
//       .post('/test')
//       .send({'title':'newTest'})
//       .expect('Content-Type', 'application/json; charset=utf-8')
//       .expect(200)
//       .end(function(err, res) {
//         if (err) done(err);
//         res.body.should.have.property('title');
//         done();
//       });
//   });
// });