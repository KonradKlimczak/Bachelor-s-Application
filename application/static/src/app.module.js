angular
    .module('bachelorsApp', ['lessonApp', 'ngSanitize', 'ngMaterial', 'ui.router'])
    .config(function ($mdThemingProvider, $httpProvider) {

        $mdThemingProvider.theme('default').primaryPalette('blue-grey');

        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';

    });
