angular.module('index')
  .service('gasService', function($http, $q) {

    this.getGasData = function(){
      var defer = $q.defer();
      $http.get('/gas')
        .then((res => {
          console.log('Success from getGasData!', res.data);
          defer.resolve(res.data);
        }),
        (err => {
          console.log('Err from getGasData!', err);
          defer.resolve(err);
        })
      );
      return defer.promise;
    };

    this.postGasData = function(data) {
      $http.post('/gas', data)
        .success(data => {
          console.log('Success from postGasData!', data);
        });
    }
  });