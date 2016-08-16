angular.module('starterApp').config([
  '$stateProvider', '$locationProvider', '$urlRouterProvider',
  function($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      .state('home', {
        url: '/',
        views: {
          content: {
            templateUrl: '/src/page/view/main.html'
          }
        }
      })
      .state('logIn', {
        url: '/sign-in',
        views: {
          content: {
            templateUrl: '/src/logIn/view/logInView.html'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  }
]);
