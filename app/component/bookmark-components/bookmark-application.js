angular.module('bookmark-application', [])
.directive('bookmarkList', function($rootScope, $state, countShowItemsInPaging, apiBookmarkData){
	return {
		//scope: true,
		templateUrl: 'app/component/bookmark-components/bookmark-application.html',
		link: function($scope, iElm, iAttrs, controller) {
			$scope.tags = [];
			$scope.selectedItemText = '';
			$scope.countItems = countShowItemsInPaging;
			$scope.currentPage = 1;

			$scope.pageChanged = function(){
				$scope.bookmarks = apiBookmarkData.load();
				$scope.totalItems = $scope.bookmarks.length;
			}

			if ($state.params.filter){
				$rootScope.filter = $state.params.filter;
			 	$scope.bookmarks = apiBookmarkData.getBookmarkFromFilter($rootScope.filter);
			}
			else {
				$scope.pageChanged();
			}

			$scope.getListTags = function(bookmark){
				if ($scope.isEdit) return;
				var data = apiBookmarkData.getTags(bookmark);
				$scope.tags = data.base;
				$scope.selectedItemText = bookmark.title;
				$scope.customTags = data.custom;
			}

			var listener = $scope.$on('getListTags', function(bookmark){
				$scope.getListTags(bookmark);
			});

			$scope.$on('$destroy', listener);

			$scope.deleteBookmark = function(event, bookmark){
				event.stopPropagation();
				$scope.bookmarks.splice($scope.bookmarks.indexOf(bookmark), 1);
				if (bookmark === $scope.selectedItem) $scope.selectedItem = null;
				apiBookmarkData.save($scope.bookmarks);
				$scope.totalItems = $scope.bookmarks.length;
			}

			$scope.edit = function(event, bookmark){
                $scope.editBookmark(bookmark);
                event.stopPropagation();
            }
		}
	};
});