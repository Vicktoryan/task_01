angular.module('bookmarkDataApplication', [])
	.factory('apiBookmarkData', apiBookmarkData);

apiBookmarkData.$inject = ['$filter', '$http'];
function apiBookmarkData($filter, $http){

	var service = {};
	service.data = [{
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

	service.load = load;
	service.getTags = getTags;
	service.getBookmarkFromFilter = getBookmarkFromFilter;
 

	return service;

	/////////////
	function load(){
		return service.data;
	}

	function getBookmarkFromFilter(filter){
		var data = [];
		filter = filter.toLowerCase();
		service.data.forEach(function(item){
			if (item.tags.join(' ').toLowerCase().indexOf(filter) > -1) data.push(item);
		});
		return data;
	}

	function getTags(bookmark){
		var data = bookmark.tags;
		return data;
	}
};