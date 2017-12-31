splashCtrl.$inject = ['authService', '$location'];
function splashCtrl(authService, $location) {
  this.submit = function() {
    console.log(`You hit log out!`);
    authService.postLogout();
    $location.path('/');
  };
}

module.exports = splashCtrl;