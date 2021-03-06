loginCtrl.$inject = ['authService', '$location'];
function loginCtrl(authService, $location) {

  this.submitLogin = function() {

    const email = document.querySelector('[name=email]').value;
    const password = document.querySelector('[name=password]').value;

    console.log(`You hit submit with email ${email} and password ${password}`);
    authService.postLoginData({email, password});
    $location.path('/');
  }
}

module.exports = loginCtrl;