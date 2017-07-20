/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:2016/10/5
 \*Time:21:49
 \*Description:
 */
define([
    'angular',
    'AppCenter/appApprove/js/approve.scopeTestDir',
    'AppCenter/appApprove/js/approve.handledController',
    // '_authentication/index',//加载angular模块资源
],function(angular,scopeTestDir,appApproveHandledController){
    'use strict';
    var approveApp=angular.module('approve.app', [
            'common.app',//公共模块
            'auth.app',//权限认证模块
    ]);
    approveApp.directive('scopeTest',scopeTestDir);
    approveApp.controller('appApproveHandledController',appApproveHandledController);
    return approveApp;
});