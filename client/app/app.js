const angular = require('angular');
const uirouter = require('angular-ui-router');
const routes = require('./routes');

angular.module('index', [uirouter])
  .config(routes);

require('./components');
require('./controllers');
require('./services');
