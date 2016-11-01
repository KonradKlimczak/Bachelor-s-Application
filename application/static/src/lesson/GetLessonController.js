angular
  .module('lessonApp')
  .controller('GetLessonController', function ($scope, $stateParams, $http) {
    getLesson();

    $scope.animate = animate;
    $scope.compileSource = compileSource;

    function animate(question) {
      var floorLength = 0,
        user = question.userAnswer || '';

      if (question.answer.length > user.length) {
        floorLength = question.answer.length - user.length;
      }

      question.userOutput = user + '_'.repeat(floorLength);
    }

    function compileSource(question) {
      var xstr = question.source.replace('__name__', $scope.appUser.name).split('__answer__');

      question.start = xstr[0];
      question.end = xstr[1];
      animate(question);
    }

    function submitTest() {
      var testResult = {
        good: 0,
        bad: 0
      };

      for (var i = 0; i < $scope.questions.length; i++) {
        var element = $scope.questions[i];
        testResult.good += element.answer === element.userAnswer;
        testResult.bad += element.answer !== element.userAnswer;
      }
    }

    function getLesson() {
      $http({
        method: 'POST',
        data: {
          'id': $stateParams['lesson']
        },
        url: '/api/lesson/get-lesson'
      }).then(function successCallback(response) {
        $scope.name = response.data.name;
        $scope.description = response.data.description;
        $scope.questions = response.data.questions;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert('error');
      });
    }
  });
