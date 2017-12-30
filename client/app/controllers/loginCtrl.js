loginCtrl.$inject = ['authService'];
function loginCtrl(authService) {

  this.submitLogin = function() {

    const email = document.querySelector('[name=email]').value;
    const password = document.querySelector('[name=password]').value;

    console.log(`You hit submit with email ${email} and password ${password}`);
    authService.postLoginData(email);
  }
}

module.exports = loginCtrl;