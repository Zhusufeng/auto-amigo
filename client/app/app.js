const angular = require('angular');
const uirouter = require('angular-ui-router');
const bootstrap = require('bootstrap');
const bootstrapCSS = require('bootstrap/dist/css/bootstrap.min.css');
const routes = require('./routes');

angular.module('index', [uirouter])
  .config(routes);

require('./components');
require('./controllers');
require('./services');
