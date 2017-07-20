/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:2016/10/3
 \*Time:17:03
 \*Description:
 */

define([
    'angular'
],function(angular){
    'use strict';
        function AppCtrl( $scope,   $translate,   $localStorage, $state,$stateParams,$window,$http,$log,HTTPURL,AUTH_EVENTS,stateReloadService ) {
           //body 处的controller
            var vm=$scope.vm={};
            //获取头部导航栏数据--begin
            $http({
                "url":HTTPURL.header,
                "params":'',
                "method":"post"
            }).then(function(data){
                vm.data=data.data;
                // $log.info("header list data:",data);
            },function(status,data){ console.log(status,data); });
            //获取头部导航栏数据--end

            //获取左侧列表数据--begin
            $http({
                "url":HTTPURL.sidebar,
                "params":'',
                "method":"post"
            }).then(function(data){
                vm.sidebar=data.data;
                // $log.info("sidebar list data:",data);
            },function(status,data){ console.log(status,data); });
            //获取左侧列表数据--end
        }

        AppCtrl.$inject=['$scope', '$translate', '$localStorage', '$state','$stateParams','$window',"$http",'$log',"HTTPURL",'AUTH_EVENTS','stateReloadService'];
        return AppCtrl;
});

