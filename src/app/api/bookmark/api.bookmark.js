'use strict';

/**
*  Module
*
* Description
*/
angular.module('bookmarkDataApp', [])
	.factory('apiBookmarkData', apiBookmarkData);

function apiBookmarkData(){

	var service = {};
	service.data = [{
		url: 'abc',
		title: 'JavaScript',
		tags: []
	}, {
		url: 'abc1',
		title: 'Backbone',
		tags: []
	}, {
		url: 'abc2',
		title: 'JQuery',
		tags: []
	}, {
		url: 'abc3',
		title: 'Library',
		tags: []
	}, {
		url: 'abc4',
		title: 'Underscore',
		tags: []
	}];

	service.load = load;

	return service;
	/////////////
	function load(){
		return service.data;
	}
}

