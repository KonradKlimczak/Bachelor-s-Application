angular.module('bachelorsApp').config([
  '$mdDialogProvider',
  function ($mdDialogProvider) {
    $mdDialogProvider.addPreset('error', {
      methods: ['locals'],
      options: function () {
        return {
          templateUrl: '/static/src/dialog/warningDialogView.html',
          controller: function ($scope, $mdDialog, error) {
            $scope.error = error;
            $scope.closeDialog = function() {
              $mdDialog.hide();
            }
          },
          clickOutsideToClose: true,
          escapeToClose: true
        };
      }
    });
  }
]);
