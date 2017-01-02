angular.module('bachelorsApp').config([
  '$mdDialogProvider',
  function ($mdDialogProvider) {
    $mdDialogProvider.addPreset('success', {
      methods: ['locals'],
      options: function () {
        return {
          templateUrl: '/static/src/dialog/view/successDialogView.html',
          controller: function ($scope, $mdDialog, success) {
            $scope.success = success;
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
