/**
 * Created by wanghy on 2016/11/18.
 */
define([
], function () {
    'use strict';
    function distTreeIcon(){
        return {
            restrict: 'EC',
            replace: false,
            scope:{
                model: '=iconModel',
                config: '=iconConfig'
            },
            controller: ['$scope', function ($scope) {
            }],
            templateUrl: 'business/tree/tpl/icon.html'
        };
    }
    return distTreeIcon;
});