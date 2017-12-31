'use strict';

const angular = require('angular');

angular.module('index').component('splash', require('./splash'));
angular.module('index').component('login', require('./login'));
angular.module('index').component('signup', require('./signup'));
angular.module('index').component('gas', require('./gas'));
// angular.module('index').component('gas', {
//   controller: 'gasCtrl',
//   // template: "<span>Hewwwwo</span>"
//   // templateUrl: '../views/gas.html' // this is based on where index.html is located, worked with webpack-dev-server when went to /client/js
//   template: require('./views/gas.html') // path based on index.js, to get to work with html loader
  
// });
