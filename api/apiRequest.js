const request = require('request');
const { username, password } = require('../config/keys');
const options = {
  headers: {
    'User-Agent': 'request',
    Authorization:
      'Basic ' + new Buffer(username + ':' + password).toString('base64')
  }
};

module.exports = url => {
  return new Promise(async (resp, rej) => {
    request.get(url, { headers: options.headers }, (err, res, body) => {
      let statusCode;
      if (err) {
        rej({
          statusCode: 500,
          body: err
        });
      } else {
        statusCode = res.statusCode;
      }
      resp({ statusCode, body: JSON.parse(body) });
    });
  });
};
