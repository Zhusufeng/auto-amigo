angular.module('index')
  .service('gasService', function($http, $q) {
    // const getGas = $http({
    //   method: 'GET',
    //   url: '/gas'
    // })
    // .then(function(res) {
    //   console.log('Success!', res.data);
    // }, function(err) {
    //   console.log('Error!', err);
    // });

    this.getGasData = function(){
      var temp = {};
      var defer = $q.defer();
      $http.get('/gas')
        .success(data => {
          console.log('Success from getGasData!', data);
          temp = data;
          defer.resolve(data);
        });
      return defer.promise;
    };

  });