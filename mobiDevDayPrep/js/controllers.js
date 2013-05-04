'use strict';


function homeCtrl ($scope, $http, $timeout, $location, HackerNews) {

	$scope.subRedditName = "technology";
	
	$scope.fetch = function(){
		$http.jsonp("http://www.reddit.com/r/" + $scope.subRedditName + ".json?jsonp=JSON_CALLBACK")
		.success(function(data, status) {
			$scope.reddit = data;

			$timeout(function() {	
				for (var i = data.data.children.length - 1; i >= 0; i--) {
				 	//data.data.children[i].foundOnHn = $http.jsonp("http://api.thriftdb.com/api.hnsearch.com/items/_search?q=" + data.data.children[i].data.url + "&callback=JSON_CALLBACK") ;
					var child = data.data.children[i];
					
					 	child.foundOnHn = HackerNews.get(child.data.url);
				};
			}, 0);
		});
	};

	$scope.getKeys = function(obj){
		return Object.keys(obj);
	};

    $scope.hnDetails = function(obj) {
        HackerNews.set_current(obj);
        $location.path("/hnDetails");
    };
};

function hnDetailsCtrl($scope, HackerNews, $routeParams) {
    $scope.hn = angular.toJson(HackerNews.get_current());
}