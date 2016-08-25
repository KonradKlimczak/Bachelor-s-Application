angular
  .module('starterApp')
  .controller('ChatController', function ($scope, $http, $interval) {
    $scope.loading = true;
    $scope.userMessage = {
      text: ''
    };
    $scope.messages = [];
    function getMessages() {
      $http({
        method: 'POST',
        data: {
          'participants': [$scope.appUser.name, 'Nancie']
        },
        url: '/api/chat/get-messages'
      }).then(function successCallback(response) {
        $scope.messages = response.data;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.error(response);
        alert('error');
      });
    }
    getMessages();
    $interval(getMessages, 5000);
    $scope.sendMessage = function () {
      $http({
        method: 'POST',
        data: {
          'receiver': 'Nancie',
          'message': $scope.userMessage.text
        },
        url: '/api/chat/send-message'
      }).then(function successCallback(response) {
        if (response.data.status === 'success') {
          getMessages();
          $scope.userMessage.text = '';
        }
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.error(response);
        alert('error');
      });
    };
  });
