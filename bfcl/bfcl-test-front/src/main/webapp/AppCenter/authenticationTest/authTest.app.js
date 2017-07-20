/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:2016/10/5
 \*Time:21:49
 \*Description:
 */
define([
    'angular',
    'AppCenter/authenticationTest/js/authController',
],function(angular,authController){
    'use strict';
    var authTest=angular.module('authTest.app', [
    ]);
    authTest.controller('authController',authController);
    return authTest;
});