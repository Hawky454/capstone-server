const request = require('supertest');
const knex = require('../database/knex');
const expect = require('chai').expect;
const app = require('../app');

const fixtures = require('./fixtures');

describe('CRUD The Tobacco Cellar', () => {
    before((done) => {
        //run migrations
        knex.migrate.latest()
            .then(() => {
                //run seeds
                return knex.seed.run();
            }).then(() => done());
    });

    it('Herro murra fukka, HERRO!', (done) => {
        request(app)
            .get('/api/cellar')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
              expect(response.body).to.be.a('array');
              console.table(response.body);
            //   expect(response.body).to.deep.equal(fixtures.cellar);
              done();
            });
    });
});