const request = require('supertest');
const app = require('../app');

describe('Server', () => {
  describe('Converter', () => {
    it('Get /converter/I Response : { "digit" : 1 }', (done) => {
      request(app)
        .get('/converter/I')
        .expect(200)
        .expect((response) => {
          expect(response.body.digit).toEqual(1);
        })
        .end((error) => (error) ? done.fail(error) : done());
    });

    it('Get /converter/II Response : { "digit" : 2 }', (done) => {
      request(app)
        .get('/converter/II')
        .expect(200)
        .expect((response) => {
          expect(response.body.digit).toEqual(2);
        })
        .end((error) => (error) ? done.fail(error) : done());
    });


    it('Get /converter/III Response : { "digit" : 3 }', (done) => {
      request(app)
        .get('/converter/III')
        .expect(200)
        .expect((response) => {
          expect(response.body.digit).toEqual(3);
        })
        .end((error) => (error) ? done.fail(error) : done());
    });

    it('Get /converter/XXX Response : { "digit" : 30 }', (done) => {
      request(app)
        .get('/converter/XXX')
        .expect(200)
        .expect((response) => {
          expect(response.body.digit).toEqual(30);
        })
        .end((error) => (error) ? done.fail(error) : done());
    });

    it('Get /converter/CCC Response : { "digit" : 300 }', (done) => {
      request(app)
        .get('/converter/CCC')
        .expect(200)
        .expect((response) => {
          expect(response.body.digit).toEqual(300);
        })
        .end((error) => (error) ? done.fail(error) : done());
    });

    it('Get /converter/V Response : { "digit" : 5 }', (done) => {
      request(app)
        .get('/converter/V')
        .expect(200)
        .expect((response) => {
          expect(response.body.digit).toEqual(5);
        })
        .end((error) => (error) ? done.fail(error) : done());
    });

    it('Get /converter/L Response : { "digit" : 50 }', (done) => {
      request(app)
        .get('/converter/L')
        .expect(200)
        .expect((response) => {
          expect(response.body.digit).toEqual(50);
        })
        .end((error) => (error) ? done.fail(error) : done());
    });

    it('Get /converter/D Response : { "digit" : 500 }', (done) => {
      request(app)
        .get('/converter/D')
        .expect(200)
        .expect((response) => {
          expect(response.body.digit).toEqual(500);
        })
        .end((error) => (error) ? done.fail(error) : done());
    });

    it('Get /converter/LV Response : { "digit" : 55 }', (done) => {
      request(app)
        .get('/converter/LV')
        .expect(200)
        .expect((response) => {
          expect(response.body.digit).toEqual(55);
        })
        .end((error) => (error) ? done.fail(error) : done());
    });


    it('Get /converter/DL Response : { "digit" : 550 }', (done) => {
      request(app)
        .get('/converter/DL')
        .expect(200)
        .expect((response) => {
          expect(response.body.digit).toEqual(550);
        })
        .end((error) => (error) ? done.fail(error) : done());
    });

    it('Get /converter/DLV Response : { "digit" : 555 }', (done) => {
      request(app)
        .get('/converter/DLV')
        .expect(200)
        .expect((response) => {
          expect(response.body.digit).toEqual(555);
        })
        .end((error) => (error) ? done.fail(error) : done());
    });

    it('Get /converter/VI Response : { "digit" : 6 }', (done) => {
      request(app)
        .get('/converter/VI')
        .expect(200)
        .expect((response) => {
          expect(response.body.digit).toEqual(6);
        })
        .end((error) => (error) ? done.fail(error) : done());
    });

    it('Get /converter/VIII Response : { "digit" : 8 }', (done) => {
      request(app)
        .get('/converter/VIII')
        .expect(200)
        .expect((response) => {
          expect(response.body.digit).toEqual(8);
        })
        .end((error) => (error) ? done.fail(error) : done());
    });

    it('Get /converter/XI Response : { "digit" : 11 }', (done) => {
      request(app)
        .get('/converter/XI')
        .expect(200)
        .expect((response) => {
          expect(response.body.digit).toEqual(11);
        })
        .end((error) => (error) ? done.fail(error) : done());
    });

    it('Get /converter/XIII Response : { "digit" : 13 }', (done) => {
      request(app)
        .get('/converter/XIII')
        .expect(200)
        .expect((response) => {
          expect(response.body.digit).toEqual(13);
        })
        .end((error) => (error) ? done.fail(error) : done());
    });

    it('Get /converter/LX Response : { "digit" : 60 }', (done) => {
      request(app)
        .get('/converter/LX')
        .expect(200)
        .expect((response) => {
          expect(response.body.digit).toEqual(60);
        })
        .end((error) => (error) ? done.fail(error) : done());
    });

    it('Get /converter/LXV Response : { "digit" : 65 }', (done) => {
      request(app)
        .get('/converter/LXV')
        .expect(200)
        .expect((response) => {
          expect(response.body.digit).toEqual(65);
        })
        .end((error) => (error) ? done.fail(error) : done());
    });

    it('Get /converter/IV Response : { "digit" : 4 }', (done) => {
      request(app)
        .get('/converter/IV')
        .expect(200)
        .expect((response) => {
          expect(response.body.digit).toEqual(4);
        })
        .end((error) => (error) ? done.fail(error) : done());
    });

    it('Get /converter/IX Response : { "digit" : 9 }', (done) => {
      request(app)
        .get('/converter/IX')
        .expect(200)
        .expect((response) => {
          expect(response.body.digit).toEqual(9);
        })
        .end((error) => (error) ? done.fail(error) : done());
    });

    it('Get /converter/XL Response : { "digit" : 40 }', (done) => {
      request(app)
        .get('/converter/XL')
        .expect(200)
        .expect((response) => {
          expect(response.body.digit).toEqual(40);
        })
        .end((error) => (error) ? done.fail(error) : done());
    });

    it('Get /converter/XC Response : { "digit" : 90 }', (done) => {
      request(app)
        .get('/converter/XC')
        .expect(200)
        .expect((response) => {
          expect(response.body.digit).toEqual(90);
        })
        .end((error) => (error) ? done.fail(error) : done());
    });

    it('Get /converter/CLIX Response : { "digit" : 159 }', (done) => {
      request(app)
        .get('/converter/CLIX')
        .expect(200)
        .expect((response) => {
          expect(response.body.digit).toEqual(159);
        })
        .end((error) => (error) ? done.fail(error) : done());
    });

    it('Get /converter/M Response : { "digit" : 1000 }', (done) => {
      request(app)
        .get('/converter/M')
        .expect(200)
        .expect((response) => {
          expect(response.body.digit).toEqual(1000);
        })
        .end((error) => (error) ? done.fail(error) : done());
    });

    it('Get /converter/MMMM Response : { "digit" : 4000 }', (done) => {
      request(app)
        .get('/converter/MMMM')
        .expect(200)
        .expect((response) => {
          expect(response.body.digit).toEqual(4000);
        })
        .end((error) => (error) ? done.fail(error) : done());
    });

    it('Get /converter/MCCXXXVIII Response : { "digit" : 1238 }', (done) => {
      request(app)
        .get('/converter/MCCXXXVIII')
        .expect(200)
        .expect((response) => {
          expect(response.body.digit).toEqual(1238);
        })
        .end((error) => (error) ? done.fail(error) : done());
    });
  });
});