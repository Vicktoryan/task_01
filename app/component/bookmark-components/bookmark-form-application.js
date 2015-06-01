angular.module('bookmark-form-application', []).filter('listUnsingTags', function(){
	return function(bookmarks, itemTags){
		if (!bookmarks) return;
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
}).directive('bookmarkEditForm', function(){
	return {
		scope: true,
		templateUrl: 'app/component/bookmark-components/bookmark-form-application.html',
		link: function($scope, iElm, iAttrs, controller) {

		}
	};
});