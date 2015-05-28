angular.module('navbarApplication', []).directive('navbar', function($state){
	return {
		templateUrl: 'app/components/navbar/navbar.html',
		replace: true,
		link: function($scope, iElm, iAttrs, controller) {
			$scope.getBookmarWithFilter = function(){
				$state.go('home', {filter : $scope.filter});
			}

			$scope.showLastEditBookmark = function(){
				$scope.newBookmark = angular.copy($scope.selectedItem);
				$scope.isEdit = true;
			}
		}
	};
});