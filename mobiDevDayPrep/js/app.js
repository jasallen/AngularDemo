'use strict';

/* App Module */

angular.module('HN_Reddit_Mashup', ['HN_Reddit_Mashup.Services']).
	config(['$routeProvider', function($routeProvider) {
	  $routeProvider
      .when('/home', { templateUrl: 'partials/home.html', controller: homeCtrl })
	  .when('/hnDetails', { templateUrl: 'partials/HNDetails.html', controller: hnDetailsCtrl })
      .otherwise({ redirectTo: '/home' });
	}]);