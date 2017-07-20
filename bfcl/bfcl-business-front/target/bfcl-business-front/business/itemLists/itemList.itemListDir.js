/**
 \* Created by plume with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:2016/11/11
 \*Time:15:40
 \*Description:
 */
define([
'angular'
], function (angular) {
    'use strict';

    function distItemListDir($http){
        return {
            restrict:'EA',
            replace:"false",
            scope:{
                "config":"=",
                "itemLists":"=",
                "singleListClick":"&",
                "doubleListClick":"&"
            },
            controller:['$scope',function($scope){}],
            templateUrl:'business/itemLists/tpl/itemList.html',
            compile: function compile(tElement, tAttrs, transclude) {
                return {
                    pre: function preLink(scope, iElement, iAttrs, controller) { },
                    post: function postLink(scope, iElement, iAttrs, controller) {
                        var vm=scope.vm={};
                        vm.singleListClick=scope.singleListClick()||angular.noop();
                        vm.doubleListClick=scope.doubleListClick()||angular.noop();
                        // vm.colors = ['primary', 'info', 'success', 'warning', 'danger', 'dark'];
                        vm.selectNote = function(note,index){
                            angular.forEach(scope.itemLists.lists, function(note,subIndex,array) {
                                note.selected = false;
                            });
                            scope.itemLists.lists[index].selected=true;
                            vm.singleListClick(note);
                        };
                    }
                };
            },
        };
    }
    distItemListDir.$inject=['$http'];
    return distItemListDir;
});