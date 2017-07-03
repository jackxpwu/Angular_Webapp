
'use strict';

var app = angular.module('app',['ui.router','ngAnimate']);/*创建模块,并且引入依赖模块*/
'use strict';

app.controller('essayCtrl',['$scope','$http',function($scope,$http){
	$http.get('data/essay.json').then(function(resp){
		$scope.essays = resp.data.essay;
	});

}]);
'use strict';

app.controller('essayDetailCtrl',['$scope','$q','$state','$http',function($scope,$q,$state,$http){
	$scope.back = function(){
		window.history.back();
	}

	function getEssayTitle(){
		var defer = $q.defer();
		$http.get('/data/essay.json?id='+$state.params.id).then(function(resp){
			console.log(resp.data);
			$scope.essay = resp.data.essay;
			defer.resolve(resp);
		},function(err){
			defer.reject(err);
		});
		return defer.promise;
	}

	getEssayTitle();
	function getContent(id){
		$http.get('/data/essayContent/content.json').then(function(resp){
			console.log(resp);
		});
	}
}]);
'use strict';

app.controller('mainCtrl',['$scope',function($scope){

}]);
'use strict';
app.controller('onesentenceCtrl',['$scope','$http',function($scope,$http){
	$http.get('/data/onesentence.json').then(function(resp){
		// console.log(resp.data.onesentence);
		$scope.items = resp.data.onesentence;
		$scope.i = 0;
		$scope.index = 0;

		var myDate = new Date();/*no change*/
		$scope.date = myDate.getDate();
		$scope.year = myDate.getFullYear();
		$scope.month = myDate.getMonth()+1;
		// console.log($scope.date,$scope.year,$scope.month);

		$scope.next = function(){
			if($scope.i>=6) return;
			$scope.i = ++$scope.i;
			$scope.index = $scope.i;
			$scope.prevDate = $scope.getDay($scope.i);
			$scope.date = $scope.prevDate.date;
			$scope.year = $scope.prevDate.year;
			$scope.month = $scope.prevDate.month;
			
			console.log($scope.i,$scope.prevDate);
		};
		$scope.prev = function(){
			if($scope.i<=0) return;
			$scope.i = --$scope.i;
			$scope.index = $scope.i;
			$scope.nextDate = $scope.getDay($scope.i);
			$scope.date = $scope.nextDate.date;
			$scope.year = $scope.nextDate.year;
			$scope.month = $scope.nextDate.month;

			console.log($scope.i,$scope.nextDate);
		}

		$scope.getDay = function(dayCount){
			var timeStamp = myDate.getTime();
			var TheDate = new Date(timeStamp - 24*60*60*1000*dayCount);
			
			TheDate.date = TheDate.getDate();
			TheDate.year = TheDate.getFullYear();
			TheDate.month = TheDate.getMonth() + 1;
			return TheDate;
		}

	});
}]);
'use strict';

app.directive('appFoot',[function(){
	return {
		restrict:'A',
		replace:true,
		templateUrl:'/view/template/foot.html'
	}
}]);
'use strict';
app.directive('appHead',[function(){
	return {
		restrict:'A',
		replace:true,
		templateUrl:'/view/template/head.html',
		link:function($scope){
			$scope.isShow = false;
			$scope.pop = function(){
				$scope.isShow = !$scope.isShow;
			}
		}
	}
}]);
"use strict";

app.directive('appRegister',[function(){
	return {
		restrict:"A",
		replace:true,
		templateUrl:"/view/template/register.html",
		link:function($scope){
			$scope.toLogin = false;
			$scope.isToLogin = function(){
				$scope.toLogin = !$scope.toLogin;
			}
		}
	}
}]);
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