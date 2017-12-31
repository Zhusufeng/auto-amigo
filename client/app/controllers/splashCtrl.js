splashCtrl.$inject = ['authService'];
function splashCtrl(authService) {
  this.submit = function() {
    console.log(`You hit log out!`);
    authService.postLogout();
  };
}

module.exports = splashCtrl;