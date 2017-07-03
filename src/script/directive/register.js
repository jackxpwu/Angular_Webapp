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