const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
//make sure the server is running
chai.use(chaiHttp);

describe('Api GitHub', function() {
  describe('/GET api/github/', () => {
    it('Should return data of github api', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          done();
        });
    });
  });
  describe('/GET api/github/user', () => {
    it('Should return data from an authenticated Github user', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/user')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          res.body.body.should.have.property('login');
          res.body.body.should.have.property('id');
          done();
        });
    });
  });
  describe('/GET api/github/users/:user', () => {
    it('Should return data of any Github user', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/users/Gquirino')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          res.body.body.should.have.property('login');
          res.body.body.should.have.property('id');
          done();
        });
    });
  });
  describe('/GET api/github/users/org', () => {
    it('Should return data about the organizations from the authenticated GitHub user belongs ', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/users/org')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          res.body.body.should.have.property('login');
          res.body.body.should.have.property('id');
          done();
        });
    });
  });
  describe('/GET api/github/users/:user/repos', () => {
    it('Should return data about the repositories of any GitHub user ', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/users/Gquirino/repos')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          res.body.body.should.be.a('array');

          done();
        });
    });
  });
  describe('/GET api/github/search/users', () => {
    it('Should return data about the GitHub users passed in the search query', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/search/users')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          res.body.body.should.have.property('total_count');
          res.body.body.should.have.property('items');
          res.body.body.items.should.be.a('array');
          done();
        });
    });
  });
  describe('/GET /api/github/user/repos', () => {
    it('Should return data from repositories of an authenticated Github user', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/user/repos')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          res.body.body.should.be.a('array');
          done();
        });
    });
  });
  describe('/GET /api/github/followers', () => {
    it('Should return user data of the users who follow the authenticated user', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/followers')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          res.body.body.should.be.a('array');
          done();
        });
    });
  });
  describe('/GET /api/github/following', () => {
    it('Should return user data that the authenticated user follows', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/following')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          res.body.body.should.be.a('array');
          done();
        });
    });
  });
  describe('/GET /api/github/orgs/:org/repos', () => {
    it('Should return data from the repositories of any organization', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/orgs/Codeminer42/repos')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          res.body.body.should.be.a('array');
          done();
        });
    });
  });
  describe('/GET /api/github/repos/:owner/:repo', () => {
    it('Should return data from the repositories of any organization or user', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/repos/GQuirino/Teste-NodeJs')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          res.body.body.should.have.property('owner');
          done();
        });
    });
  });
  describe('/GET /api/github/search/repositories', () => {
    it('Should return data about any repositories passed in the search query', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/search/repositories')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          res.body.body.should.have.property('total_count');
          res.body.body.should.have.property('items');
          res.body.body.items.should.be.a('array');
          done();
        });
    });
  });
  describe('/GET /api/github/authorizations', () => {
    it('Should return data about the authorizations of the authenticated user', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/authorizations')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          res.body.body.should.be.a('array');
          done();
        });
    });
  });
  describe('/GET /api/github/search_url', () => {
    it('Should return data according to the search query', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/search_url')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          res.body.body.should.have.property('total_count');
          res.body.body.should.have.property('items');
          res.body.body.items.should.be.a('array');
          done();
        });
    });
  });
  describe('/GET /api/github/search_issues', () => {
    it('Should return data according to the search query', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/search_issues')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          res.body.body.should.have.property('total_count');
          res.body.body.should.have.property('items');
          res.body.body.items.should.be.a('array');
          done();
        });
    });
  });
  describe('/GET /api/github/teams', () => {
    it('Should return the data of the team that the authenticated user belongs', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/teams')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          res.body.body.should.be.a('array');
          done();
        });
    });
  });
  describe('/GET /api/github/emails', () => {
    it('Should return the emails of the authenticated user', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/emails')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          res.body.body.should.be.a('array');
          done();
        });
    });
  });
  describe('/GET /api/github/emojis', () => {
    it('Should return a list of emojis', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/emojis')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          res.body.body.should.be.a('object');
          done();
        });
    });
  });
  describe('/GET /api/github/events', () => {
    it('Should return data about events', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/events')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          res.body.body.should.be.a('array');
          done();
        });
    });
  });
  describe('/GET /api/github/feeds', () => {
    it('Should return data about the feed of the authenticated user', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/feeds')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          done();
        });
    });
  });
  describe('/GET /api/github/:gist', () => {
    it('Should return data the gist', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/gist/14fb5bcc1201d452d0e9')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          res.body.body.should.be.a('object');
          res.body.body.should.have.property('url');
          res.body.body.should.have.property('id');
          done();
        });
    });
  });
  describe('/GET /api/github/issues', () => {
    it('Should return data from the issues of the authenticated user', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/issues')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          res.body.body.should.be.a('array');
          done();
        });
    });
  });
  describe('/GET /api/github/keys', () => {
    it('Should return the keys of the authenticated user', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/keys')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          res.body.body.should.be.a('array');
          done();
        });
    });
  });
  describe('/GET /api/github/notifications', () => {
    it('Should return user notifications', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/notifications')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          res.body.body.should.be.a('array');
          done();
        });
    });
  });
  describe('/GET /api/github/orgs/:org', () => {
    it('Should return data about any organization', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/orgs/Codeminer42')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          res.body.body.should.be.a('object');
          res.body.body.should.have.property('login');
          res.body.body.should.have.property('id');
          done();
        });
    });
  });
  describe('/GET /api/github/gist/public', () => {
    it('Should return the public gists', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/gist/public')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          done();
        });
    });
  });
  describe('/GET /api/github/rate/rate_limit', () => {
    it('Should return data about the rates of the authenticate user', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/rate/rate_limit')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          done();
        });
    });
  });
  describe('/GET /api/github/gist/starred', () => {
    it('Should return the gists starred by the authenticated user', done => {
      chai
        .request('http://localhost:5000')
        .get('/api/github/gist/starred')
        .end((error, res) => {
          //Status: 200 - OK
          res.should.have.status(200);
          //JSON Object
          res.body.should.be.a('object');
          res.body.should.have.property('body');
          res.body.body.should.be.a('array');
          done();
        });
    });
  });
});
