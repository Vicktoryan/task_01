angular.module('main-application.templates', []);
angular.module('main-application', [
    'component.ajax-error',
    'component.app-version',

    'navbar-application',

    'bookmark-form-application',

    'api-bookmark-application',
    'bookmark-application',

    'directive-application',
    'main-application.templates',
    'ui.router',
    'ui.bootstrap'
])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/:filter',
      template: '<main-page></main-page>',//app/main-application.html'
    });

  $urlRouterProvider.otherwise('/');
})

.constant('COUNT_CAT_FOR_CRAZY_DOG', 2)
.constant('MAX_COUNT_CLICK_CAT', 5)

.value('_rootScopeArray', [])
.value('_showScopeObjects', false)
.constant('CREATE_SCOPE_OBJECT', true)
.run(function($rootScope, _rootScopeArray, _showScopeObjects){
	$rootScope.showScopeObjects = _showScopeObjects;
    for(method in $rootScope) _rootScopeArray.push(method);
});