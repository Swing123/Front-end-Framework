/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:12/2/2016
 \*Time:1:59 PM
 \*Description:程序入口,依赖声明
 */

define([
    'angular'
], function (angular) {
    'use strict';
    function routeContentController($stateParams,$scope,stateReloadService){
        $scope.templateUrl = '';
        $scope.$on('$stateChangeSuccess',function(event,toState,toParams,fromState,fromParams){
            var vm=$scope.vm={};
            var stateParams=angular.copy(toParams);
            var freshTab=stateParams.freshTab||false;
            var stateLabel=stateParams.url+stateParams.tabName+stateParams.tabGroup+'';

            var templateUrl=$stateParams.url||'';
            templateUrl=templateUrl.replace(/\.html/g,'' );
            templateUrl=templateUrl+'.html';
            templateUrl=templateUrl.replace(/\-/g,'/' );

            var stateUrl=templateUrl;
            vm.stateIndex=stateReloadService.searchState(stateLabel,stateUrl,freshTab);
            vm.stateItems=stateReloadService.getState()._stateUrl;
        });
    }
    routeContentController.$inject=['$stateParams','$scope','stateReloadService'];
    return routeContentController;
});   