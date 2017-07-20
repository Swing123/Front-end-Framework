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
    function loginController($scope,$rootScope,AUTH_EVENTS,AuthService){
        $scope.credentials = {};
        $scope.login = function (credentials) {
            AuthService.login(credentials).then(function (user) {
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            }, function () {
                $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            });
        };
    }
    loginController.$inject=['$scope','$rootScope','AUTH_EVENTS','AuthService'];
    return loginController;
});   