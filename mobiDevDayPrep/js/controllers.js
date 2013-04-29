'use strict'


function homeCtrl ($scope, $http) {

	$scope.subRedditName = "technology";
	
	$scope.fetch = function(){
		$http.jsonp("http://www.reddit.com/r/" + $scope.subRedditName + ".json?jsonp=JSON_CALLBACK")
		.success(function(data, status) {
			$scope.reddit = data;

		});
	};

	$scope.foundOnHn = function(url) {
		$http.jsonp("http://api.thriftdb.com/api.hnsearch.com/items/_search?q=" + url + "&callback=JSON_CALLBACK") ;
	}

	$scope.getKeys = function(obj){
		return Object.keys(obj);
	};

};