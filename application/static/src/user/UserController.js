angular
  .module('bachelorsApp')
  .controller('UserController', function ($scope, $mdDialog, $http, $location, $timeout, UserService, PageService) {
    $scope.createUser = function (ev) {
      if (UserService.validateUser($scope.user) === false) {
        return;
      }
      UserService.createUser($scope.user).then(function successCallback(response) {
        var dialogObject = {};
        dialogObject[response.data.status] = response.data.message;
        $mdDialog.show(
          $mdDialog[response.data.status]().locals(dialogObject)
        );
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert('error');
      });
    };
    
    $scope.logIn = function (ev) {
      UserService.logIn($scope.user).then(function successCallback(response) {
        var dialogObject = {};
        dialogObject[response.data.status] = response.data.message;
        $mdDialog.show(
          $mdDialog[response.data.status]().locals(dialogObject)
        );
        if (response.data.status === 'success') {
          PageService.getInfo();
          $timeout(function () {
            $location.path('/');
          }, 2000);
        }
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert('error');
      });
    };

    $scope.logOut = function () {
      UserService.logOut().then(function successCallback(response) {
        var dialogObject = {};
        dialogObject[response.data.status] = response.data.message;
        $mdDialog.show(
          $mdDialog[response.data.status]().locals(dialogObject)
        );
        PageService.getInfo();
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert('error');
      });
    };

  });
