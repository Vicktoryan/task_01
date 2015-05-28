'use strict';

angular.module('task1Application', [
  'mainApplication',
  'bookmarkEditFormApplication',
  'bookmarkDataApplication',
  'navbarApplication',
  'bookmarkApplication',


  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngResource',
  'ui.router',
  'ui.bootstrap'
])
.constant('countShowItemsInPaging', 2)
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/:filter',
      templateUrl: 'app/components/main/main.html'
    });

  $urlRouterProvider.otherwise('/');
});
