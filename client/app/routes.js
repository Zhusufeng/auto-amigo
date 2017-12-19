routes.$inject = ['$urlRouterProvider', '$stateProvider'];

function routes($urlRouterProvider, $stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: '<gas></gas>'
    })
    .state('splash', {
      url: '/splash',
      template: '<span>Splash</span>'
    })
    .state('login', {
      url: '/login',
      template: '<span>Login</span>'
    })
    .state('signup', {
      url: 'signup',
      template: '<span>Sign Up</span>'
    })
  $urlRouterProvider.otherwise('/')
}

module.exports = routes;