angular
  .module('starterApp')
  .controller('PageController', function ($rootScope, PageService) {
    var guestMenu = [{
      stateUrl: '/log-in',
      label: 'Log in'
    }, {
      stateUrl: '/create-user',
      label: 'Create accout'
    }, {
      stateUrl: null,
      label: 'About',
      diable: true
    }], userMenu = [{
      stateUrl: '/chat/Nancie',
      label: 'Learn with Nancie'
    }, {
      stateUrl: '/tests',
      label: 'Solve tests'
    }, {
      stateUrl: '/log-out',
      label: 'Log Out'
    }];

  
    $rootScope.appUser = {
      name: 'Guest',
      logged: false
    };
    $rootScope.menu = guestMenu;

    $rootScope.$on('userChange', function (event, userData) {
      $rootScope.appUser.name = userData['user-name'] || 'Guest';
      $rootScope.appUser.logged = userData['user-logged'];
      if ($rootScope.appUser.logged) {
        $rootScope.menu = userMenu;
      } else {
        $rootScope.menu = guestMenu;
      }
    });
  
    PageService.getInfo();

  });
