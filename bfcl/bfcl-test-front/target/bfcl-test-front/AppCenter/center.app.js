/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:12/5/2016
 \*Time:9:22 AM
 \*Description:程序入口,依赖声明
 */

define([
    'angular',
    'AppCenter/appLogin/login.app',//应用--加入登录模块
    'AppCenter/systemConfig/sysConfig.app',//应用---系统配置模块
    'AppCenter/appApprove/approve.app',//应用--加入appApprove公共模块
    'AppCenter/componentsTest/componentsTest.app',//应用--组件测试模块
    'AppCenter/authenticationTest/authTest.app',//应用--权限测试模块
    'AppCenter/appHome/home.app'//主页
], function (angular) {
    'use strict';
    var centerApp=angular.module('center.app',[
        'login.app',//登录module
        'sysConfig.app',//系统配置module
        'approve.app',//认证模块添加
        'componentsTest.app',//组件测试模块
        'authTest.app',//权限测试
        'home.app',//主页
    ]);

});   