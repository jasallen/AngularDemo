'use strict'


function homeCtrl ($scope, $http) {

	$scope.subRedditName = "technology";
	
	$scope.fetch = function(){
		$http.jsonp("http://www.reddit.com/r/" + $scope.subRedditName + ".json?jsonp=JSON_CALLBACK")
		.success(function(data, status) {
			$scope.reddit = data;
		});
	};

	$scope.getKeys = function(obj){
		return Object.keys(obj);
	};

	$scope.HnHasMatch = function(url){
		var ret = false;

		$scope.fetchHn(url)
		.success(function(data, status) {
			ret = data.hits > 0;
		});

		return ret;
	}

	$scope.fetchHn = function(url){
		return $http.jsonp("http://api.thriftdb.com/api.hnsearch.com/items/_search?q=" + url + "?callback=JSON_CALLBACK")		
	};

	$scope.fetch();

};