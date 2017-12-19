const angular = require('angular');
import uirouter from 'angular-ui-router';

angular.module('index', [uirouter]);

require('./components');
require('./controllers');
require('./services');
