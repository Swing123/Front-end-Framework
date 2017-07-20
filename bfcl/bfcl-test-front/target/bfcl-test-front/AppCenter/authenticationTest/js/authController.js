/**
 * Created by Swing on 2016/11/1.
 */
define([],
    function(){
        'use strict';
        function tableController($scope,$http,$log,HTTPURL){
            $scope.dynamicTable={};
            $scope.config={

            };
            //获取table参数
            $http({
                "url":HTTPURL.dynamicTable,
                "params":'',
                "method":"post"
            }).then(function(data){

                $scope.dynamicTable=data.data;

                $log.info("dynamicTable config data:",data,$scope.dynamicTable);
            },function(status,data){ console.log(status,data); });
        }
        tableController.$inject=["$scope","$http","$log",'HTTPURL'];
        return tableController;
    }
);