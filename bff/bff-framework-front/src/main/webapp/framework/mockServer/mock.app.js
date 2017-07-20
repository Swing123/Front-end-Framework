/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/2/2016
 \*Time:10:51 AM
 \*Description:程序入口,依赖声明
 */

define([
    'angular',//加载angular模块资源
    'config/mockServer.config',//加载angular模块资源
    'ngMock'//加载mock测试插件资源
], function (angular,mockServer) {
    'use strict';
    var mockApp=angular.module('mock.app',[
        'ngMockE2E',//数据模拟插件module

    ]);
    mockApp.run(mockServer);
    return mockApp;

});   