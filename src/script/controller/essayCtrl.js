'use strict';

app.controller('essayCtrl',['$scope','$http',function($scope,$http){
	$http.get('data/essay.json').then(function(resp){
		$scope.essays = resp.data.essay;
	});

}]);