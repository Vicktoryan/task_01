angular.module('bookmark-application', []).directive('bookmarkList', function(apiBookmarkData, countShowItemsInPaging, $state){
	return {
		scope: true,
		templateUrl: 'app/component/bookmark-application/bookmark-application.html',
		replace: true,
		link: function($scope, iElm, iAttrs, controller) {
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
});