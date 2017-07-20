/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:2016/10/17
 \*Time:15:53
 \*Description:
 */

define([
    'angular',
    'AppCenter/appLogin/js/login.loginController',
], function (angular,loginController) {
    'use strict';
  var loginApp=angular.module('login.app',[
    ]);
    loginApp.controller('LoginController',loginController);

    return loginApp;
});