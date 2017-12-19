const angular = require('angular');
const uirouter = require('angular-ui-router');

angular.module('index', [uirouter]);

require('./components');
require('./controllers');
require('./services');
