angular.module('bookmark-form-application', []).filter('listUnsingTags', function(){
	return function(bookmarks, itemTags){
		if (!bookmarks, itemTags.length < 1) return;
		var txt = !itemTags || itemTags.tags.join(' ');
		return bookmarks.filter(function(bookmark){
			return txt.indexOf(bookmark.title) === -1 ;
		});
	};
}).filter('limits', function(){
	return function(items, start, count){
		if (!items) return;
		return items.slice((start-1)*count, start*count);
	};
}).directive('bookmarkEditForm', function(apiBookmarkData){
	return {
		//scope: true,
		templateUrl: 'app/component/bookmark-components/bookmark-form-application.html',
		link: function($scope, iElm, iAttrs, controller) {
			$scope.saveBookmark = function(){
				var newBook = angular.copy($scope.newBookmark);
				if (!newBook.id){
					var addBookmark = {
						id: new Date().getTime(),
						tags: newBook.tags,
						customTags: newBook.customTags,
						url: newBook.url,
						title: newBook.title
					};
					var index = $scope.bookmarks.push(addBookmark);
					$scope.selectedItem = $scope.bookmarks[index-1];
					}
				else {
					$scope.selectedItem.tags = newBook.tags;
					$scope.selectedItem.customTags = newBook.customTags;
					$scope.selectedItem.url = newBook.url;
					$scope.selectedItem.title = newBook.title;
				}
				$scope.$parent.$broadcast('getListTags', $scope.selectedItem);
				$scope.stateEditForm(false);
				apiBookmarkData.save($scope.bookmarks);
			}

			$scope.clearForm = function(){
				$scope.getEmptyBookmark(true);
			}

			$scope.deleteTag = function(index){
				$scope.newBookmark.tags.splice(index, 1);
			}
		}
	};
}).directive('bookmarkListTags', function(){
	return {
		//scope: true,
		templateUrl: 'app/component/bookmark-components/bookmark-list-tag.html',
		link: function($scope){
			$scope.addTag = function(tag){
				$scope.newBookmark.tags.push(tag);
			}
		}
	}
});