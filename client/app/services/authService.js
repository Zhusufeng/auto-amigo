authService.$inject = ['$http', '$q'];
function authService($http, $q) {

  this.postLoginData = (info) => {
    console.log('data sent to authService is ', info);
    return $http({
      method: 'POST',
      url: '/login',
      data: info
    })
    .then(res => {
      console.log('res from server is ', res);
      return res;
    });
  };
}

module.exports = authService;