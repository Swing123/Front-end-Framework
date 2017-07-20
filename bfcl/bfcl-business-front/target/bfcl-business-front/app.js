/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/1/2016
 \*Time:2:16 PM
 \*Description:程序入口,依赖声明
 */
define([
    'angular',//angularjs
    'ui-router',//路由模块
    /*主模块配置加载*/
    'config/main.config',//  主模块配置
    'config/main.run',//  主模块初始化操作
    'config/main.constant',//主模块常量配置
    'config/main.ctrl',//主模块Controller
    'config/main.router',//主模块路由配置
    /*组件加载*/
    'business/components.app',//业务组件模块
    'distBaseUI',//基础组件模块
    /*平台基础模块加载*/
    'framework/framework.app',//平台基础模块
    /*实际项目自定义模块加载*/
    'AppCenter/center.app',//应用--加入登录模块
],function(angular,uiRouter,mainConfig,mainRun,mainConstant,mainCtrl,mainRouter,componentsApp,distBaseUI,frameworkApp/*other custom modules*/){
    'use strict' ;
    var webApp= angular.module('webApp',[
        'ui-router',//路由模块
        'dist.component',//组件module
        'dist.ui',//framework mmodule
        'framework.app',//framework mmodule
        'center.app',//实际项目模块
    ]);
    webApp.config(mainConfig.controllerProvider);
    webApp.config(mainConfig.translateProvider);
    webApp.config(mainConfig.logProvider);
    webApp.run(mainRun.frameworkLayoutInit);
    webApp.constant('JQ_CONFIG',mainConstant.JQ_CONFIG);
    webApp.constant('HTTPURL',mainConstant.HTTPURL);
    webApp.controller('AppCtrl',mainCtrl);
    webApp.config(mainRouter);
    return webApp;
});