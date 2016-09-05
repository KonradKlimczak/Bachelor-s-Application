angular.module('starterApp').config([
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
        templateUrl: '/static/src/user/view/logInView.html'
      })
      .state('logOut', {
        url: '/log-out',
        templateUrl: '/static/src/user/view/logOutView.html'
      })
      .state('createUser', {
        url: '/create-user',
        templateUrl: '/static/src/user/view/createUserView.html'
      })
      .state('chat', {
        url: '/chat/:user',
        templateUrl: '/static/src/chat/view/chatView.html',
        onExit: function($interval){
          $interval.cancel(globalInterval);
        }
      })
      .state('lessons', {
        url: '/lesson',
        controller: 'LessonController',
        templateUrl: '/static/src/lesson/view/lessonsView.html'
      })
      .state('get-lesson', {
        url: '/lesson/:lesson',
        controller: 'GetLessonController',
        templateUrl: '/static/src/lesson/view/getLessonView.html'
      });
    $urlRouterProvider.otherwise('/');
  }
]);
