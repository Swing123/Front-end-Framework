/**
 * Created by Swing on 2016/11/24 .
 */
define([

],function(){
    'use strict';
    function comInfoController($scope,$http,$log,HTTPURL){
        $scope.info={};
        $scope.infoConfig={};

        $http({
            "url":HTTPURL.info,
            "params":'',
            "method":"post"
        }).then(function(data){

            $scope.info=data.data;

            $log.info("info config data:",data);
        },function(status,data){ console.log(status,data); });

        $scope.openProjectInfo=function(param){
            alert(1);
            console.log(param)
        }

    }
    comInfoController.$inject=["$scope","$http","$log",'HTTPURL'];
    return comInfoController;
});