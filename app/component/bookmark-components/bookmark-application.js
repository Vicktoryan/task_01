angular.module('bookmark-application', []).directive('bookmarkList', function($rootScope, $state){
	return {
		scope: true,
		templateUrl: 'app/component/bookmark-components/bookmark-application.html',
		link: function($scope, iElm, iAttrs, controller) {
			$scope.bcd = function(){
				$rootScope.name = 2;
			};
			// $scope.selectedItem = null;
			// $scope.tags = [];
			// $scope.selectedItemText = '';
			// $scope.countItems = countShowItemsInPaging;
			// 	$scope.currentPage = 1;

			// $scope.pageChanged = function(){
			// 	$scope.bookmarks = apiBookmarkData.load();
			// 	$scope.totalItems = $scope.bookmarks.length;
			// }

			// if ($state.params.filter){
			// 	$scope.filter = $state.params.filter;
			//  	$scope.bookmarks = apiBookmarkData.getBookmarkFromFilter($state.params.filter);
			// }
			// else {
			// 	$scope.pageChanged();
			// }

			// $scope.getListTags = function(bookmark){
			// 	if ($scope.isEdit) return;
			// 	$scope.tags = apiBookmarkData.getTags(bookmark);
			// 	$scope.selectedItemText = bookmark.title;
			// }

			// $scope.deleteBookmark = function(event, bookmark){
			// 	event.stopPropagation();
			// 	$scope.bookmarks.splice($scope.bookmarks.indexOf(bookmark), 1);
			// 	if (bookmark === $scope.selectedItem) $scope.selectedItem = null;
			// 	apiBookmarkData.save($scope.bookmarks);
			// 	$scope.totalItems = $scope.bookmarks.length;
			// }

			// $scope.editBookmark = function(event, bookmark){
			// 	event.stopPropagation();
			// 	$scope.selectedItem = bookmark;
			// 	$scope.newBookmark = angular.copy(bookmark);
			// 	$scope.isEdit = true;
			// }
		}
	};
}).directive('test', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),

		scope: true,
		templateUrl: 'app/component/bookmark-components/bookmark-form-application.html',
		link: function($scope, iElm, iAttrs, controller) {
			$scope.abc = function(){

			};
		}
	};
});