'use strict';

angular.module('app', [
  'mainApp',
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngResource',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/:filter',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'bmark'
      });

    $urlRouterProvider.otherwise('/');
  })
;
