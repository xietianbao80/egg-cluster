'use strict';

module.exports = function(app) {
  app.get('/', function* () {
    this.body = {
      beforeReady: app.beforeReady,
      afterReady: app.listeners('error').length,
    };
  });
};
