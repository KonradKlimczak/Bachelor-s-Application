angular
  .module('starterApp')
  .controller('LessonController', function ($scope, $http, $location) {
    $scope.lessons = [{
        id: 1,
        title: 'Habla hola!',
        category: 'Greetings',
        description: 'In this test you will learn how to start conversation in numerous ways. It covers words like: "Hi", "Good moring", "Good evening", "Greetings" etc.'
    }];

    $scope.startLesson = startLesson;

    function startLesson (id) {
        $location.path('/lesson/'+id);
    };
  });
