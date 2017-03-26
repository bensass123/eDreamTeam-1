'use strict';

let Easy = require('../models/Intermediate');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('Intermediate', () => {
    
    // beforeEach((done) => { // before each test, empty the database
    //     Easy.remove({}, (err) => {
    //         done();
    //     });
    // });

    /*
    * Test the /GET route
    */
    describe('/GET intermediate', () => {
        it('it should GET all the memes', (done) => {
            chai.request(server)
                .get('/api/intermediate')
                .end((err, res) => {
                    res.should.have.status(200);
                    // res.body.should.be.a('array');
                    // res.body.length.should.be.eql(0);
                done();
                });
        });
    });

});
