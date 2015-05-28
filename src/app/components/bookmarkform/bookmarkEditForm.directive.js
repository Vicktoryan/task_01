angular.module('bookmarkEditFormApplication', [])
.filter('listUnsingTags', function(){
	return function(bookmarks, itemTags){
		if (!bookmarks) return;
		var txt = !itemTags || itemTags.tags.join(' ');
		return bookmarks.filter(function(bookmark){
			return txt.indexOf(bookmark.title) === -1 ;
		});
	}
})
.filter('limits', function(){
		return function(items, start, count){
			if (!items) return;
			return items.slice((start-1)*count, start*count);
		}
})

.directive('bookmarkEditForm', function(apiBookmarkData){
	return {
		replace: true,
		templateUrl: 'app/components/bookmarkform/bookmarkEditForm.html',
		link: function($scope, $element, $attr, controller){
			$scope.isEdit = false;
			$scope.bookmarks = [];
			var getEmptyBookmark = function(isLastId){
				$scope.newBookmark = {
					id: isLastId ? $scope.newBookmark.id : '',
					url: '',
					title: '',
					tags: []
				};
			}
			getEmptyBookmark();

			$scope.saveBookmark = function(){
				var newBook = angular.copy($scope.newBookmark);
				if (!newBook.id){
					var addBookmark = {
						id: new Date().getTime(),
						tags: newBook.tags,
						url: newBook.url,
						title: newBook.title
					};
					var index = $scope.bookmarks.push(addBookmark);
					$scope.selectedItem = $scope.bookmarks[index-1];
					}
				else {
					$scope.selectedItem.tags = newBook.tags;
					$scope.selectedItem.url = newBook.url;
					$scope.selectedItem.title = newBook.title;
				}
				$scope.getListTags($scope.selectedItem);
				$scope.isEdit = false;

				apiBookmarkData.save($scope.bookmarks);
			}

			$scope.clearForm = function(){
				getEmptyBookmark(true);
			}

			$scope.createBookmark = function(){
				getEmptyBookmark();
				$scope.isEdit = true;
			}
		}
	}
}).directive('bookmarkListTags', function(){
	return {
		templateUrl: 'app/components/bookmarkform/bookmarkListTags.html',
		link: function($scope){
			$scope.addTag = function(tag){
				$scope.newBookmark.tags.push(tag);
			}

			$scope.deleteTag = function(index){
				$scope.newBookmark.tags.splice(index, 1);
			}
		}
	}
}).directive("clearOnEscape", function() {
  return {
  	scope:{
  		model: '=ngModel'
  	},
    link: function($scope, element, attributes) {
      element.on("keyup", function(e) {

        if (e.keyCode === 27)
        {
    		$scope.model = '';
       		$scope.$apply();
       		e.preventDefault();
        }
      });
    }
  };
});
