/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/3/2016
 \*Time:10:46 AM
 \*Description:程序入口,依赖声明
 */

define([], function () {
    'use strict';
    function distFooterDir($http){
        return {
            restrict:'EA',
            scope:{
                "config":"="
            },
            controller:['$scope',function($scope){}],
            templateUrl:'business/footer/tpl/footer.html',
            compile: function compile(tElement, tAttrs, transclude) {
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) { },
                    post: function postLink(scope, iElement, iAttrs, controller) {
                    }
                };
            },
        };
    }
    distFooterDir.$inject=['$http'];
    return distFooterDir;
});   