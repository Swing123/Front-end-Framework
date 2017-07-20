

FormElementController.$inject=["$scope","$q","$http","$log"];

function FormElementController($scope,$q,$http,$log){

    $scope.totalItems = 50;//分页总数
    $scope.currentPage = 4;//当前页数
    $scope.setPage = function (pageNo) {//设置目标页
        $scope.currentPage = pageNo;
    };
    $scope.pageChanged = function() {
        $log.log('Page changed to: ' + $scope.currentPage);
    };


}
angular.module("dist.ui").controller("FormElementController",FormElementController)