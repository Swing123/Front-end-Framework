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

        function distSettingsDir($http){
        return {
            restrict:'EA',
            scope:{
                "appSettings":"="
            },
            controller:['$scope',function($scope){}],
            templateUrl:'business/settings/tpl/settings.html',
            compile: function compile(tElement, tAttrs, transclude) {
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) { },
                    post: function postLink(scope, iElement, iAttrs, controller) {
                    }
                };
            },
        };
    }
        distSettingsDir.$inject=['$http'];
        return distSettingsDir;

});

