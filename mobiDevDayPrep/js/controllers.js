'use strict'


function homeCtrl ($scope, $http, $q, HackerNews) {

	$scope.subRedditName = "technology";
	
	$scope.fetch = function(){
		$http.jsonp("http://www.reddit.com/r/" + $scope.subRedditName + ".json?jsonp=JSON_CALLBACK")
		.success(function(data, status) {
			$scope.reddit = data;

			// for (var i = data.data.children.length - 1; i >= 0; i--) {
			//  	data.data.children[i].foundOnHn = $http.jsonp("http://api.thriftdb.com/api.hnsearch.com/items/_search?q=" + data.data.children[i].data.url + "&callback=JSON_CALLBACK") ;
			//  	//HackerNews.get(data.data.children[i].data.url);		 	
			// };
		});
	};

	$scope.foundOnHn = function(url) {
		$http.jsonp("http://api.thriftdb.com/api.hnsearch.com/items/_search?q=" + url + "&callback=JSON_CALLBACK") ;
	}

	$scope.getKeys = function(obj){
		return Object.keys(obj);
	};

};