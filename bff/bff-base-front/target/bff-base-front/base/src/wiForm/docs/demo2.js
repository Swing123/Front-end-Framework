

FormUploadController.$inject=["$scope","$q","$http","$log"];

function FormUploadController($scope,$q,$http,$log){

    $scope.maxSize = 4;// 页面最大可见图标
    $scope.bigTotalItems = 175;//总共的分页项数
    $scope.bigCurrentPage = 1;//当前页


}
angular.module("dist.ui").controller("FormUploadController",FormUploadController)