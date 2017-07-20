/**
 * Created by Swing on 2016/11/15 .
 */
define([

],function(){
    'use strict';
    function comLogController($scope,$http,$log,HTTPURL){
        $scope.log={};
        $scope.logConfig={};

        $http({
            "url":HTTPURL.log,
            "params":'',
            "method":"post"
        }).then(function(data){

            $scope.log=data.data;

            $log.info("log config data:",data,$scope.log);
        },function(status,data){ console.log(status,data); });
    }
    comLogController.$inject=["$scope","$http","$log",'HTTPURL'];
    return comLogController;
});