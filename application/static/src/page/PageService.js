angular
  .module('starterApp')
  .service('PageService', ['$rootScope', '$http', function ($rootScope, $http) {
    this.getInfo = function () {
      return $http({
        method: 'GET',
        url: '/api/page-info'
      }).then(function successCallback(response) {
        $rootScope.$emit('userChange', response.data)
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert('error');
      });
    };
  }]);