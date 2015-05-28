'use strict';

/**
*  Module
*
* Description
*/
angular.module('bookmarkDataApp', [])
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
	/**
	 * Загрузка данных
	 * @return {[type]}       [Список закладок]
	 */
	function load(){
		return service.data;
	}

	/**
	 * Получение отфильтрованных данных 
	 * @param  {[type]} filter [description]
	 * @return {[type]}        [description]
	 */
	function getBookmarkFromFilter(filter){
		var data = [];
		filter = filter.toLowerCase();
		service.data.forEach(function(item){
			if (item.tags.join(' ').toLowerCase().indexOf(filter) > -1)
				data.push(item);
		});


            var sendDataParam = {
                method: 'POST',
                url: 'http://myakauntforyou.comuf.com/action.php',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }

            };
            sendDataParam.data = {
                act: 'task1',
                method: 'getListBookmark',
                params: {"pageSize": 1, "currentPage": 0}
            };
            console.log(sendDataParam);
            $http(sendDataParam);


		return data;
	}

	/**
	 * Получение списка тэгов
	 * @param  {[type]} item [description]
	 * @return {[type]}      [description]
	 */
	function getTags(bookmark){
		var data = bookmark.tags;
		// if (item !== null)
		// 	item.tags.forEach(function(id){
		// 		data.push($filter('filter')(service.data, {id: id}, true));
		// 	});
		// else {
		// 	var nData = $filter('filter')(service.data, {title: title}, true);
		// 	if (nData.length > 0)
		// 		nData[0].tags.forEach(function(id){
		// 			data.push($filter('filter')(service.data, {id: id}));
		// 		});
		// }
		return data;
	}
};

//https://github.com/Vicktoryan/training.git