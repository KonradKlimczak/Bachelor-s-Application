angular
  .module('starterApp')
  .controller('PageController', function ($scope, $http) {
    $scope.appUser = {
      name: 'Guest',
      logged: false
    };

    $http({
      method: 'GET',
      url: '/api/page-info'
    }).then(function successCallback(response) {
      $scope.appUser.name = response.data['user-name'];
      $scope.appUser.logged = response.data['user-logged'];
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      alert('error')
    });
  });
