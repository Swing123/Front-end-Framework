/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/3/2016
 \*Time:10:17 AM
 \*Description:程序入口,依赖声明
 */

define([

], function () {
    'use strict';
    function loginController($scope,$rootScope,AuthService,HTTPURL){
        $scope.credentials = {};
        $scope.login = function (credentials) {
            AuthService.login(HTTPURL.authentication,credentials).then(function (user) {}, function () {});
        };
    }
    loginController.$inject=['$scope','$rootScope','AuthService','HTTPURL'];
    return loginController;
});   