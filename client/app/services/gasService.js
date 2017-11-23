angular.module('index')
  .service('gasService', function($http, $q) {

    this.getGasData = function(){
      const defer = $q.defer();
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
      const defer = $q.defer();
      $http.post('/gas', data)
        .then((res => {
          console.log('Success from postGasData!', res);
          defer.resolve(res);
        }),
        (err => {
          console.log('Err from postGasData!', err);
          defer.resolve(err);
        })
      );
      return defer.promise;
    }
  });