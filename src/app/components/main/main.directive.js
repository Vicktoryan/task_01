angular.module('mainApplication', []).directive('mainPage', function(apiBookmarkData, $state){
	return {
		link: function($scope, $element){
			$scope.bookmarks = [];
			
		}
	}
});