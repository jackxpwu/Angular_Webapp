'use strict';

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('main',{
		url:'/main',
		templateUrl:'/view/main.html',
		controller:'mainCtrl'
	}).state('onesentence',{
		url:'/onesentence',
		templateUrl:'/view/onesentence.html',
		controller:'onesentenceCtrl'
	}).state('essay',{
		url:'/essay/:id',
		templateUrl:'/view/essay.html',
		controller:'essayCtrl'
	}).state('essayDetail',{
		url:'/essayDetail/:id',
		templateUrl:'/view/essayDetail.html',
		controller:'essayDetailCtrl'
	});
	$urlRouterProvider.otherwise('main');
}]);