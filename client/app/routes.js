routes.$inject = ['$urlRouterProvider', '$stateProvider'];

function routes($urlRouterProvider, $stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      template: '<gas></gas>'
    });
  $urlRouterProvider.otherwise('/')
}

module.exports = routes;