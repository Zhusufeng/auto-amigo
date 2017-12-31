routes.$inject = ['$urlRouterProvider', '$stateProvider'];

function routes($urlRouterProvider, $stateProvider) {
  $stateProvider
    .state('gas', {
      url: '/gas',
      template: '<gas></gas>'
    })
    .state('home', {
      url: '/',
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