'use strict';

var angular = require('angular');

angular.module('index').service('authService', require('./authService'));
angular.module('index').service('gasService', require('./gasService'));
angular.module('index').service('userService', require('./userService'));