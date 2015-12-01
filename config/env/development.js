var port = 3000;

module.exports = {
  port: port,
  db: 'mongodb://localhost/jobs',
  facebook: {
    clientID: 'App ID',
    clientSecret: 'App Secret',
    callbackURL: 'http://localhost:'+ port +'/oauth/facebook/callback'
  }
};