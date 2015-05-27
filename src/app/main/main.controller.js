'use strict';
(function(){
  angular.module('mainApp', [
  	'bookmarkDataApp'
  	])
  	.filter('listUnsingTags', listUnsingTags)
    .controller('MainCtrl', MainCtrl);


    /**
     * Filter
     * @return {[type]} [description]
     */
    function listUnsingTags(){
  		return function(bookmarks, itemTags){
  			var txt = itemTags.tags.join(' ');
  			return bookmarks.filter(function(bookmark){
  				return txt.indexOf(bookmark.title) === -1 ;
  			});
  		}
  	}

  	/**
  	 * Controller
  	 * @type {Array}
  	 */
    MainCtrl.$inject = ['apiBookmarkData', '$stateParams', '$state', '$rootScope'];
	function MainCtrl(apiBookmarkData, $stateParams, $state, $rootScope){
		var vm = this;
		vm.tags = [];
		vm.bookFilter = '';
		vm.selectedItem = null;
		vm.isEdit = false;
		vm.selectedItemText = '';
		vm.newBookmark = {
			url: '',
			tilte: '',
			tags: []
		};

		vm.bookmarksAll = apiBookmarkData.load();

		/**
		 * Functions
		 * @type {[type]}
		 */
		vm.getListTags = getListTags;
		vm.getBookmarWithFilter = getBookmarWithFilter;
		vm.addBookmark = addBookmark;
		vm.deleteBookmark = deleteBookmark;
		vm.editBookmark = editBookmark;
		vm.deleteTag = deleteTag;
		vm.addTag = addTag;
		vm.saveBookmark = saveBookmark;
		vm.showLastEditBookmark = showLastEditBookmark;
		vm.clearEditForm = clearEditForm;

		/**
		 * Filter in route
		 * @param  {[type]} $state.params.filter [description]
		 * @return {[type]}                      [description]
		 */
		if ($state.params.filter){
			vm.filter = $state.params.filter;
		 	vm.bookmarks = apiBookmarkData.getBookmarkFromFilter($state.params.filter);
		}
		else {
			$rootScope.bookFilter = '';
			vm.bookmarks = apiBookmarkData.load();
		}


		//////
		
		function getBookmarWithFilter(){
			$rootScope.bookFilter = vm.filter;
			$state.go('home', {filter : vm.filter});
		}

		/**
		 * Показ тэгов записи
		 * @param  {[type]} bookmark [description]
		 * @return {[type]}          [description]
		 */
		function getListTags(bookmark){
			vm.tags = apiBookmarkData.getTags(bookmark);
			vm.selectedItemText = bookmark.title;
		}

		function addBookmark(){
			vm.clearEditForm();
			vm.isEdit = true;
		}

		function clearEditForm(){
			vm.newBookmark = {
				id: '',
				url: '',
				title: '',
				tags: []
			};
		}

		/**
		 * Показ последнего редактируемой записи
		 * @return {[type]} [description]
		 */
		function showLastEditBookmark(){
			vm.newBookmark = angular.copy(vm.selectedItem);
			vm.isEdit = true;
		}

		// СОХРАНЕНИЕ
		function saveBookmark(){
			var newBook = angular.copy(vm.newBookmark);

			if (!newBook.id){
				var addBookmark = {
					id: new Date(),
					tags: newBook.tags,
					url: newBook.url,
					title: newBook.title
				};
				var index = vm.bookmarks.push(addBookmark);
				vm.selectedItem = vm.bookmarks[index-1];
			}
			else {
				vm.selectedItem.tags = newBook.tags;
				vm.selectedItem.url = newBook.url;
				vm.selectedItem.title = newBook.title;
			}
			vm.getListTags(vm.selectedItem);
			vm.isEdit = false;
		}

		function deleteBookmark(event, bookmark){
			event.stopPropagation();
			vm.bookmarksAll.splice(vm.bookmarksAll.indexOf(bookmark), 1);
			vm.bookmarks.splice(vm.bookmarks.indexOf(bookmark), 1);
		}


		// РЕДАКТИРОВАНИЕ
		function editBookmark(event, bookmark){
			event.stopPropagation();
			vm.selectedItem = bookmark;
			vm.newBookmark = angular.copy(bookmark);
			vm.isEdit = true;
		}

		/**
		 * Удаление тэгов из формы редактирования
		 * @param  {[type]} index [description]
		 * @return {[type]}       [description]
		 */
		function deleteTag(index){
			vm.newBookmark.tags.splice(index, 1);
		}

		/**
		 * Добвление тэгов на форму редактирования
		 * @param {[type]} bookmark [description]
		 */
		function addTag(bookmark){
			vm.newBookmark.tags.push(bookmark.title);
		}
	}
})();



