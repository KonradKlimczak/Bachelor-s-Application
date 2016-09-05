angular
  .module('starterApp')
  .controller('GetLessonController', function ($scope) {
    $scope.questions = [{
      name: 'Greeting',
      source: '-Hola, __name__!<br/>-__answer__, Nancie!',
      answer: 'Hola',
      type: 'list',
      answers: ['Chao', 'Malo', 'Nancie', 'Hola', 'Silla']
    }, {
      name: 'Greeting',
      source: '-Hola, __name__!<br/>-__answer__, Nancie!',
      answer: 'Hola',
      type: 'list',
      answers: ['Chao', 'Malo', 'Nancie', 'Hola', 'Silla']
    }, {
      name: 'Greeting',
      source: '-Hola, __name__!<br/>-__answer__, Nancie!',
      answer: 'Hola',
      type: 'list',
      answers: ['Chao', 'Malo', 'Nancie', 'Hola', 'Silla']
    }];

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
  });
