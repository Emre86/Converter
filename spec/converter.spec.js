const request = require('supertest');
const app = require('../app');

describe('Server', () => {
    describe('Converter', () => {
        it('Test with JSON { "message" : "OK" }', (done) => {
            request(app)
                .get('/converter')
                .expect(200)
                .expect((response) => {
                    expect(response.body.message).toEqual("OK");
                })
                .expect('Content-Type', 'application/json; charset=utf-8')
                .end((error) => (error) ? done.fail(error) : done());
        });
    });
});