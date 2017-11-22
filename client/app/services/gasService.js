angular.module('index')
  .service('gasService', function($http) {
    const getGas = $http({
      method: 'GET',
      url: '/gas'
    })
    .then(function(res) {
      console.log('Success!', res.data);
    }, function(err) {
      console.log('Error!', err);
    });
  });