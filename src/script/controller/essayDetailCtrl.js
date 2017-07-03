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