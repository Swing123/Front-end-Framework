/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/3/2016
 \*Time:10:33 AM
 \*Description:程序入口,依赖声明
 */

define([

], function () {
    'use strict';
    function scopeTestDir($rootScope){
        return{
            restrict:'EA',
            replace:false,
            scope:{
                config:'='
            },
            template:'<div ng-click="parentScope[config.fName](subParams)">调取父级作用域的函数</div>',
            controller:['$scope',function($scope){
                $scope.parentScope=$scope.$parent;
                $scope.subParams="data from sub scope";
            }]
        };
    }
    scopeTestDir.$inject=['$rootScope'];
    return scopeTestDir;
});   