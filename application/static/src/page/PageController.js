angular
  .module('starterApp')
  .controller('PageController', function ($scope, $rootScope, PageService) {
    var guestMenu = [{
      state: 'logIn',
      label: 'Log in'
    }, {
      state: 'createUser',
      label: 'Create accout'
    }, {
      state: 'home',
      label: 'About',
      diable: true
    }], userMenu = [{
      state: 'chat',
      label: 'Learn with Nancie'
    }, {
      state: 'tests',
      label: 'Solve tests',
      diable: true
    }, {
      state: 'logOut',
      label: 'Log Out'
    }];

  
    $scope.appUser = {
      name: 'Guest',
      logged: false
    };
    $scope.menu = guestMenu;
    $rootScope.$on('userChange', function(event, userData) {
      $scope.appUser.name = userData['user-name'] || 'Guest';
      $scope.appUser.logged = userData['user-logged'];
      if ($scope.appUser.logged) {
        $scope.menu = userMenu;
      } else {
        $scope.menu = guestMenu;
      }
    });

    PageService.getInfo();

  });
