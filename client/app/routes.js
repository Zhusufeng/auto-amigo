routes.$inject = ['$urlRouterProvider', '$stateProvider'];

function routes($urlRouterProvider, $stateProvider) {
  $stateProvider
    .state('gas', {
      url: '/',
      template: '<gas></gas>'
    })
    .state('splash', {
      url: '/splash',
      template: '<splash></splash>'
    })
    .state('login', {
      url: '/login',
      template: '<login></login>'
    })
    .state('signup', {
      url: '/signup',
      template: '<signup></signup>'
    });
  $urlRouterProvider
    .otherwise('/');
}

module.exports = routes;