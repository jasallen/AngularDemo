'use strict'


function homeCtrl ($scope, $http) {

	$scope.subRedditName = "technology";

	$scope.fetch = function(){
		$http.jsonp("http://www.reddit.com/r/" + $scope.subRedditName + ".json?jsonp=JSON_CALLBACK")
		.success(function(data, status) {
			$scope.reddit = data;
		});
	};

};