angular.module('bachelorsApp').config([
  '$stateProvider', '$locationProvider', '$urlRouterProvider',
  function($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/static/src/page/view/main.html'
      })
      .state('logIn', {
        url: '/sign-in',
        templateUrl: '/static/src/user/view/logInView.html',
        controller: 'UserController'
      })
      .state('logOut', {
        url: '/log-out',
        templateUrl: '/static/src/user/view/logOutView.html'
      })
      .state('createUser', {
        url: '/create-user',
        templateUrl: '/static/src/user/view/createUserView.html',
        controller: 'UserController'
      })
      .state('chat', {
        url: '/chat/:user',
        templateUrl: '/static/src/chat/view/chatView.html',
        controller: 'ChatController',
        onExit: function($interval){
          $interval.cancel(globalInterval);
        }
      });
    $urlRouterProvider.otherwise('/');
  }
]);
