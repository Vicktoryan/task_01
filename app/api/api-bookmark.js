angular.module('api-bookmark-application', []).factory('apiBookmarkData', function($filter, $http, $filter, countShowItemsInPaging){
	if (!localStorage.getItem('data') || !localStorage.getItem('data') === '[]'){
		var data = [{
			id: '1',
			url: 'abc',
			title: 'JavaScript',
			tags: ['Backbone', 'JQuery']
		}, {
			id: '2',
			url: 'abc1',
			title: 'Backbone',
			tags: ['JavaScript', 'JQuery']
		}, {
			id: '3',
			url: 'abc2',
			title: 'JQuery',
			tags: ['JavaScript', 'Backbone', 'Library']
		}, {
			id: '4',
			url: 'abc3',
			title: 'Library',
			tags: []
		}, {
			id: '5',
			url: 'abc4',
			title: 'Underscore',
			tags: []
		}];
		localStorage.setItem('data', JSON.stringify(data));
	}
	return {
		load: function(start, count){
			var data = JSON.parse(localStorage.getItem('data'));
			return data;
		},
		save: function(data){
			if (data)
				localStorage.setItem('data', JSON.stringify(data));
		},
		getBookmarkFromFilter : function(filter){
			var data = [];
			filter = filter.toLowerCase();
			service.data.forEach(function(item){
				if (item.tags.join(' ').toLowerCase().indexOf(filter) > -1) data.push(item);
			});
			return data;
		},
		getTags: function(bookmark){
			var data = bookmark.tags;
			return data;
		}
	};
});