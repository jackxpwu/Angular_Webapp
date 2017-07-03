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