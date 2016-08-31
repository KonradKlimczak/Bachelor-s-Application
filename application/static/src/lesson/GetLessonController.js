angular
  .module('starterApp')
  .controller('GetLessonController', function ($scope) {
    $scope.questions = [{
        name: 'Greeting',
        source: '-Hola, __name__!<br/>-__answer__, Nancie!',
        answer: 'Hola',
        type: 'list',
        answers: ['Chao', 'Malo', 'Nancie', 'Hola', 'Silla']
    }];

    $scope.compileSource = function(source) {
        return ['Some text', $scope.appUser.name, ''];
    };
  });
