
angular
  .module('starterApp')
  .controller('UserController', function ($scope, $mdDialog, $http, UserService) {
    $scope.createUser = function (ev) {
      if (UserService.validateUser($scope.user) === false) {
        return;
      }
      $http({
        method: 'POST',
        data: {
          'user-name': $scope.user.userName,
          'email': $scope.user.email,
          'password': $scope.user.password
        },
        url: '/api/create-user'
      }).then(function successCallback(response) {
        dialogObject = {}
        dialogObject[response.data.status] = response.data.message;
        $mdDialog.show(
          $mdDialog[response.data.status]().locals(dialogObject)
        );
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert('error')
      });
    };
    
    $scope.logIn = function (ev) {
      $http({
        method: 'POST',
        data: {
          'user-name': $scope.user.userName,
          'password': $scope.user.password
        },
        url: '/api/log-in'
      }).then(function successCallback(response) {
        dialogObject = {}
        dialogObject[response.data.status] = response.data.message;
        $mdDialog.show(
          $mdDialog[response.data.status]().locals(dialogObject)
        );
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert('error')
      });
    };

  });
