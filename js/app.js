
(function(){

	var myApp = angular.module('footBall');

	myApp.config(function($routeProvider){
		$routeProvider
		.when("/main",{
			templateUrl : "views/main.html",
			controller	: "mainController"
		})
		.when("/stats2015",{
			templateUrl : "views/stats.html",
			controller  : "mainController"
		})
		.when("/matchview", {
			templateUrl : "views/matchview.html",
			mainController : "mainController"
		})
		.otherwise({redirectTo: "/main"});
	});

}());