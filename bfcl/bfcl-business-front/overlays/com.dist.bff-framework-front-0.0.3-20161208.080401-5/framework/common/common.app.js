/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/1/2016
 \*Time:2:41 PM
 \*Description:程序入口,依赖声明
 */

define([
    'angular',
    'framework/common/js/directives/com.uiFullscreenDir',
    'framework/common/js/directives/com.uiNavDir',
    'framework/common/js/directives/com.uiToggleClassDir',
    'framework/common/js/filters/com.fromNowFilter',
    'framework/common/js/services/com.uiLoadServ',
    'ui-router',//路由模块
    // 'ui-router-extras',//路由拓展模块 //注：已注释
    'angular-translate',//翻译模块资源
    'angular-translate-loader-static-files',//静态加载资源
    'angular-translate-storage-cookies',//cookies存储资源
    'angular-translate-storage-local',//本地存储资源
    'ngStorage',//本地存储资源
    'ngAnimate',//动画模块
    'ui-bootstrap'//ui.bootstrap资源
], function (angular,uiFullscreenDir,uiNavDir,uiToggleClassDir,fromNowFilter,uiLoadServ) {
    'use strict';
    var commonApp=angular.module('common.app',[
        'ui.router',//路由
        // 'ct.ui.router.extras',//路由拓展模块 //注：已注释
        'pascalprecht.translate',//语言翻译模块
        'ngStorage',//本地存储
        'ngAnimate',//动画
        'ui.bootstrap'//ui-bootstrap插件
    ]);
    commonApp.directive('uiFullscreen',uiFullscreenDir);
    commonApp.directive('uiNav',uiNavDir);
    commonApp.directive('uiToggleClass',uiToggleClassDir);
    commonApp.filter('fromNow',fromNowFilter);
    commonApp.service('uiLoad',uiLoadServ);
    return commonApp;
});   