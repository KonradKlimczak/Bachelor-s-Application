angular
  .module('lessonApp')
  .controller('CreateLessonController', function ($scope, $http) {
    $scope.questions = [];
    addQuestion();
    $scope.createLesson = createLesson;
    $scope.addQuestion = addQuestion;
    $scope.addAnswerOption = addAnswerOption;

    function createLesson() {
      $http({
        method: 'POST',
        data: {
          'name': $scope.name,
          'category': $scope.category,
          'description': $scope.description,
          questions: $scope.questions
        },
        url: '/api/lesson/create-lesson'
      }).then(function successCallback(response) {
        dialogObject = {};
        dialogObject[response.data.status] = response.data.message;
        $mdDialog.show(
          $mdDialog[response.data.status]().locals(dialogObject)
        );
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert('error');
      });
    }

    function addQuestion() {
      $scope.questions.push({});
    }

    function addAnswerOption(question) {
      if (!question.answers) {
        question.answers = [];
      }
      question.answers.push('');
    }
  });
