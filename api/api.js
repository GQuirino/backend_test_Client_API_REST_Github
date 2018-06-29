const { page_order, per_page, query } = require('../config/params');
const makeRequest = require('./apiRequest');

module.exports = {
  home: async (req, resp) => {
    let apiCall = 'https://api.github.com/';
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  user: async (req, resp) => {
    let apiCall = 'https://api.github.com/user';
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  authorizations: async (req, resp) => {
    let apiCall = 'https://api.github.com/authorizations';
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  searchUrl: async (req, resp) => {
    let apiCall =
      'https://api.github.com/search/code?q=' +
      query +
      '&order=' +
      page_order +
      '+&per_page=' +
      per_page;
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  emails: async (req, resp) => {
    let apiCall = 'https://api.github.com/user/emails';
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  emojis: async (req, resp) => {
    let apiCall = 'https://api.github.com/emojis';
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  events: async (req, resp) => {
    let apiCall = 'https://api.github.com/events';
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  feeds: async (req, resp) => {
    let apiCall = 'https://api.github.com/feeds';
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  followers: async (req, resp) => {
    let apiCall = 'https://api.github.com/user/followers';
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  following: async (req, resp) => {
    let apiCall = 'https://api.github.com/user/following';
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  gist: async (req, resp) => {
    let apiCall = 'https://api.github.com/gists/' + req.params.gist_id;
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  searchIssues: async (req, resp) => {
    let apiCall =
      'https://api.github.com/search/issues?q=' +
      query +
      '&order=' +
      page_order +
      '+&per_page=' +
      per_page;
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  issues: async (req, resp) => {
    let apiCall = 'https://api.github.com/issues';
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  keys: async (req, resp) => {
    let apiCall = 'https://api.github.com/user/keys';
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  notifications: async (req, resp) => {
    let apiCall = 'https://api.github.com/notifications';
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  orgRepos: async (req, resp) => {
    let apiCall =
      'https://api.github.com/orgs/' +
      req.params.org +
      '/repos?order=' +
      page_order +
      '+&per_page=' +
      per_page;
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  org: async (req, resp) => {
    let apiCall = 'https://api.github.com/orgs/' + req.params.org;
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  gistsPublic: async (req, resp) => {
    let apiCall = 'https://api.github.com/gists/public';
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  rateLimit: async (req, resp) => {
    let apiCall = 'https://api.github.com/rate_limit';
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  ownerRepo: async (req, resp) => {
    let apiCall =
      'https://api.github.com/repos/' +
      req.params.owner +
      '/' +
      req.params.repo;
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  searchRepo: async (req, resp) => {
    let apiCall =
      'https://api.github.com/search/repositories?q=' +
      query +
      '&order=' +
      page_order +
      '+&per_page=' +
      per_page;
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  userRepos: async (req, resp) => {
    let apiCall =
      'https://api.github.com/user/repos?order=' +
      page_order +
      '+&per_page=' +
      per_page;
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  starredGists: async (req, resp) => {
    let apiCall = 'https://api.github.com/gists/starred';
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  team: async (req, resp) => {
    let apiCall = 'https://api.github.com/teams';
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  userUrl: async (req, resp) => {
    let apiCall = 'https://api.github.com/users/' + req.params.user;
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  userOrgs: async (req, resp) => {
    let apiCall = 'https://api.github.com/user/orgs';
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  userReposUrl: async (req, resp) => {
    let apiCall =
      'https://api.github.com/users/' +
      req.params.user +
      '/repos?order=' +
      page_order +
      '+&per_page=' +
      per_page;
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  },
  userSearch: async (req, resp) => {
    let apiCall =
      'https://api.github.com/search/users?q=' +
      query +
      '&order=' +
      page_order +
      '+&per_page=' +
      per_page;
    let json = await makeRequest(apiCall);
    resp.status(json.statusCode).send(json);
  }
};
