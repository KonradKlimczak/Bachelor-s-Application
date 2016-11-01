angular.module('lessonApp').config([
  '$stateProvider', '$locationProvider',
  function($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      .state('lessons', {
        url: '/lesson',
        controller: 'LessonController',
        templateUrl: '/static/src/lesson/view/lessonsView.html'
      })
      .state('create-lesson', {
        url: '/create-lesson',
        controller: 'CreateLessonController',
        templateUrl: '/static/src/lesson/view/createLessonView.html'
      })
      .state('get-lesson', {
        url: '/lesson/:lesson',
        controller: 'GetLessonController',
        templateUrl: '/static/src/lesson/view/getLessonView.html'
      });
  }
]);
