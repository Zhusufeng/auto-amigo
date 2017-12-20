function loginCtrl(){
  this.email = '';
  this.password = '';

  this.submitLogin = function(e) {
    console.log(e);
  }
}

module.exports = loginCtrl;