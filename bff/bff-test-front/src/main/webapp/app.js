/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/1/2016
 \*Time:2:16 PM
 \*Description:程序入口,依赖声明
 */

define([
    'angular',//angularjs
    /*主模块配置加载*/
    'config/main.config',//主模块配置
    'config/main.constant',//主模块常量配置
    'config/main.ctrl',//主模块Controller
    'config/main.router',//主模块路由配置
    /*组件加载*/
    'business/components.app',//业务组件模块
    /*平台基础模块加载*/
    'framework/framework.app',//平台基础模块
    /*实际项目自定义模块加载*/
    'AppCenter/appLogin/login.app',//应用--加入登录模块
    'AppCenter/systemConfig/sysConfig.app',//应用---系统配置模块
    'AppCenter/appApprove/approve.app'//应用--加入appApprove公共模块
],function(angular,mainConfig,mainConstant,mainCtrl,mainRouter,componentsApp,frameworkApp/*other custom modules*/){
    'use strict';
    var webApp= angular.module('webApp',[
        'dist.component',//组件module
        'framework.app',//framework mmodule
        'login.app',//登录module
        'sysConfig.app',//系统配置module
        'approve.app'//认证模块添加
    ]);
    webApp.config(mainConfig.controllerProvider);
    webApp.config(mainConfig.translateProvider);
    webApp.config(mainConfig.logProvider);
    webApp.constant('JQ_CONFIG',mainConstant.JQ_CONFIG);
    webApp.constant('HTTPURL',mainConstant.HTTPURL);
    webApp.controller('AppCtrl',mainCtrl);
    webApp.config(mainRouter);
    return webApp;
});