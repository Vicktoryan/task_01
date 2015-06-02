angular.module('navbar-application', []).directive('navbar', function($rootScope, $state, apiBookmarkData){
	return {
		//scope: true,
		templateUrl: 'app/component/navbar-component/navbar-application.html',
		link: function($scope, iElm, iAttrs, controller) {
			$scope.hideAllDirectives = function() {
                $rootScope.pavelMorozovShow = !$rootScope.pavelMorozovShow;
            };
			$scope.getBookmarWithFilter = function(){
				$state.go('home', {filter : $rootScope.filter});
			};

			$scope.showLastEditBookmark = function(){
				if (!$scope.selectedItem) return;
				$scope.newBookmark = angular.copy($scope.selectedItem);
				$scope.stateEditForm(true);
			}

			$scope.createBookmark = function(){
				$scope.getEmptyBookmark();
				$scope.stateEditForm(true);
			}
		}
	};
});