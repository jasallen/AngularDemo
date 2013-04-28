'use strict';

/* App Module */

angular.module('HN_Reddit_Mashup', []).
	config(['$routeProvider', function($routeProvider) {
	  $routeProvider
      .when('/home', {templateUrl: 'partials/home.html',   controller: homeCtrl})
      .otherwise({ redirectTo: '/home' });
	}]);