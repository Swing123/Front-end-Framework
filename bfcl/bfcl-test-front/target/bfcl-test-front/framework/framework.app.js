/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/1/2016
 \*Time:2:16 PM
 \*Description:程序入口,依赖声明
 */

define([
    'angular',//angularjs
    'framework/authentication/auth.app',//权限认证模块
    'framework/common/common.app',//加入公共模块
    'framework/mockServer/mock.app',//加入后台数据模拟模块
],function(angular,appConfig,appConstant,appMainCtrl,appRouterConfig){
        'use strict';
    var webApp= angular.module('framework.app',[
        'common.app',//模块公共module
        'auth.app',//权限认证mmodule
        'mock.app',//后台数据模拟module
    ]);
    return webApp;
});