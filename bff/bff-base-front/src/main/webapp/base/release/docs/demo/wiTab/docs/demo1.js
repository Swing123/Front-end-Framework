

wiTabController2.$inject=["$scope","$q","$http","$log"];

function wiTabController2($scope,$q,$http,$log){

		$scope.tabConfig={
			"lists":[
			{"name":"项目1","param":"","active":false},
			{"name":"项目2","param":"","active":true},
			{"name":"项目3","param":"","active":false}
			]
		};
		$scope.tabClick=function(index,list){
			console.info(index,list);
		}
}
angular.module("dist.ui").controller("wiTabController2",wiTabController2)