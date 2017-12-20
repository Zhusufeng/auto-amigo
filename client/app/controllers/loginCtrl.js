function loginCtrl(){

  this.submitLogin = function() {

    const email = document.querySelector('[name=email]').value;
    const password = document.querySelector('[name=password]').value;

    console.log(`You hit submit with email ${email} and password ${password}`);
  }
}

module.exports = loginCtrl;