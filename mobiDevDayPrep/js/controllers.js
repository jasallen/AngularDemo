'use strict'


function homeCtrl ($scope, $http) {

	$http.jsonp("http://www.reddit.com/r/technology.json?jsonp=JSON_CALLBACK")
	.success(function(data, status) {
		$scope.reddit = data;
	});

};