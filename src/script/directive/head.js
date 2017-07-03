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