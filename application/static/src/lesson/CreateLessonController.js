angular
  .module('starterApp')
  .controller('CreateLessonController', function ($scope, $http) {
    $scope.questions = [];
    addQuestion();
    $scope.createLesson = createLesson;
    $scope.addQuestion = addQuestion;

    function createLesson() {
    
    }

    function addQuestion() {
      $scope.questions.push({});
    }
  });
