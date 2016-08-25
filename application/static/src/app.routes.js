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
          }
        }
      })
      .state('logIn', {
        url: '/sign-in',
        views: {
          content: {
            templateUrl: '/static/src/user/view/logInView.html'
          }
        }
      })
      .state('logOut', {
        url: '/log-out',
        views: {
          content: {
            templateUrl: '/static/src/user/view/logOutView.html'
          }
        }
      })
      .state('createUser', {
        url: '/create-user',
        views: {
          content: {
            templateUrl: '/static/src/user/view/createUserView.html'
          }
        }
      })
      .state('chat', {
        url: '/chat/nancie',
        views: {
          content: {
            templateUrl: '/static/src/chat/view/chatView.html'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  }
]);
