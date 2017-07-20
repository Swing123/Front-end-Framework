/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:2016/10/9
 \*Time:15:51
 \*Description:
 */
define([

], function () {
    'use strict';
    function distSidebarDir($http){
        return {
            restrict:'EA',
            scope:{
                "config":"="
            },
            controller:['$scope',function($scope){}],
            templateUrl:'business/sidebar/tpl/aside.html',
            compile: function compile(tElement, tAttrs, transclude) {
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) { },
                    post: function postLink(scope, iElement, iAttrs, controller) {
                    }
                };
            },
        };
    }
    distSidebarDir.$inject=['$http'];
    return distSidebarDir;
});

