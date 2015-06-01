angular.module('navbar-application', []).directive('navbar', function($rootScope, $state){
	return {
		scope: true,
		templateUrl: 'app/component/navbar-component/navbar-component.html',
		link: function($scope, iElm, iAttrs, controller) {
			$scope.hideAllDirectives = function() {
                $rootScope.showScopeObjects = !$rootScope.showScopeObjects;
            };
			// $scope.getBookmarWithFilter = function(){
			// 	$state.go('home', {filter : $scope.filter});
			// }

			// $scope.showLastEditBookmark = function(){
			// 	$scope.newBookmark = angular.copy($scope.selectedItem);
			// 	$scope.isEdit = true;
			// }
		}
	};
});