const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://127.0.0.1:7001/' }));
  // app.use(proxy('/api', { target: 'http://192.168.43.40:3000/' }));
};
