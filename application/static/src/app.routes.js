angular.module('starterApp').config([
  '$stateProvider', '$locationProvider', '$urlRouterProvider',
  function($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      .state('home', {
        url: '/',
        views: {
          content: {
            templateUrl: '/static/src/page/view/main.html'
          },
          menu: {
            templateUrl: '/static/src/page/view/guestMenu.html'
          }
        }
      })
      .state('logIn', {
        url: '/sign-in',
        views: {
          content: {
            templateUrl: '/static/src/user/view/logInView.html'
          },
          menu: {
            templateUrl: '/static/src/page/view/guestMenu.html'
          }
        }
      })
      .state('createUser', {
        url: '/create-user',
        views: {
          content: {
            templateUrl: '/static/src/user/view/createUserView.html'
          },
          menu: {
            templateUrl: '/static/src/page/view/guestMenu.html'
          }
        }
      })
      .state('app', {
        url: '/',
        views: {
          content: {
            templateUrl: '/static/src/page/view/main.html'
          },
          menu: {
            templateUrl: '/static/src/page/view/userMenu.html'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  }
]);
