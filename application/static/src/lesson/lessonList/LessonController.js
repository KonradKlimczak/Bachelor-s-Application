angular
  .module('lessonApp')
  .controller('LessonController', function ($scope, LessonService, $mdToast) {
    $scope.lessons = [];

    $scope.startLesson = LessonService.startLesson;

    LessonService.getLessonList().then(function successCallback(response) {
      $scope.lessons = response.data.list;
    }, function errorCallback(response) {
      console.error(response);
      $mdToast.show(
        $mdToast.simple({
          hideDelay: false
        })
          .textContent('An error occured during http request. List of lessons could not be provided.')
          .action('Close')
      );
    });


  });
