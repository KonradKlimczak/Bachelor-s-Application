angular
  .module('lessonApp')
  .service('LessonService', ['$http', '$location', function ($http, $location) {
    this.getLessonList = getLessonList;
    this.startLesson = startLesson;

    function getLessonList () {
      return $http({
        method: 'GET',
        url: '/api/lesson/get-all'
      });
    }

    function startLesson (id) {
      $location.path('/lesson/'+id);
    };
  }]);