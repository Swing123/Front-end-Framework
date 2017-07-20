/**
 * Created by Swing on 2016/11/29 .
 */
define([

],function(){
    'use strict';
    function comBoardController($scope,$http,$log,HTTPURL){
        $scope.board={};
        $scope.boardConfig={};

        $http({
            "url":HTTPURL.board,
            "params":'',
            "method":"post"
        }).then(function(data){

            $scope.board=data.data;

            $log.info("board config data:",data);
        },function(status,data){ console.log(status,data); });
    }
    comBoardController.$inject=["$scope","$http","$log",'HTTPURL'];
    return comBoardController;
});