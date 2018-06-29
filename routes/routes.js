// "https://api.github.com/search/repositories?q=" + query + "&order=desc+&per_page=" + pageSize;

const api = require('../api/api');

module.exports = app => {
  app.route('/api/github/').get(api.home);
  app.route('/api/github/user').get(api.user);
  app.route('/api/github/users/:user').get(api.userUrl);
  app.route('/api/github/users/orgs').get(api.userOrgs);
  app.route('/api/github/users/:user/repos').get(api.userReposUrl);
  app.route('/api/github/search/users').get(api.userSearch);
  app.route('/api/github/user/repos').get(api.userRepos);
  app.route('/api/github/followers').get(api.followers);
  app.route('/api/github/following').get(api.following);
  app.route('/api/github/orgs/:org/repos').get(api.orgRepos);
  app.route('/api/github/repos/:owner/:repo').get(api.ownerRepo);
  app.route('/api/github/search/repositories').get(api.searchRepo);
  app.route('/api/github/authorizations').get(api.authorizations);
  app.route('/api/github/search_url').get(api.searchUrl);
  app.route('/api/github/search_issues').get(api.searchIssues);
  app.route('/api/github/teams').get(api.team);
  app.route('/api/github/emails').get(api.emails);
  app.route('/api/github/emojis').get(api.emojis);
  app.route('/api/github/events').get(api.events);
  app.route('/api/github/feeds').get(api.feeds);
  app.route('/api/github/gist/:gist_id').get(api.gist);
  app.route('/api/github/issues').get(api.issues);
  app.route('/api/github/keys').get(api.keys);
  app.route('/api/github/notifications').get(api.notifications);
  app.route('/api/github/orgs/:org').get(api.org);
  app.route('/api/github/gists/public').get(api.gistsPublic);
  app.route('/api/github/rate/rate_limit').get(api.rateLimit);
  app.route('/api/github/gist/starred').get(api.starredGists);
};
