/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/1/2016
 \*Time:2:12 PM
 \*Description:程序入口,依赖声明
 */


require.config({
    // "baseUrl":"/modules",
    "paths": {
        //库文件
        //"responsive": "framework/library/responsive-nav",
        "angular": "framework/library/angular/angular",
        "bootstrap": "framework/library/bootstrap/dist/js/bootstrap.min",
        // "angularRoute": "framework/library/angular-route/angular-route",
        "angular-resource": "framework/library/angular-resource/angular-resource",
        "ui-router": "framework/library/angular-ui-router/release/angular-ui-router.min",
        "angular-translate": "framework/library/angular-translate/angular-translate.min",
        "angular-translate-loader-static-files": "framework/library/angular-translate-loader-static-files/angular-translate-loader-static-files.min",
        "angular-translate-storage-cookies": "framework/library/angular-translate-storage-cookie/angular-translate-storage-cookie.min",
        "angular-translate-storage-local": "framework/library/angular-translate-storage-local/angular-translate-storage-local.min",
        "ui-bootstrap": "framework/library/angular-bootstrap/ui-bootstrap-tpls.min",
        "ngStorage": "framework/library/ngstorage/ngStorage",
        "ngAnimate":"framework/library/angular-animate/angular-animate.min",
        "angular-cookies": "framework/library/angular-cookies/angular-cookies.min",
        "ngMock": "framework/library/ngMock/angular-mocks",
        //"phprpc": "framework/library/phprpc_client",
        "jquery": "framework/library/jquery/dist/jquery.min",
        "Layer": "framework/library/layer/layer/layer",
        "jsonlint": "framework/library/jsonlint/jsonlint",//用来校验json文件
        "linedtextarea": "framework/library/jquery-linedtextarea/jquery-linedtextarea",//用来校验json文件
    },
    // baseUrl: 'js/lib', 设置根路径
    "shim": {
        'angular': {
            deps: ["jquery"],
            exports: "angular"
        },
        'ui-router': {
            deps: ["angular"]
        },
        'angularResource': {
            deps: ['angular']
        },
        'angular-translate': {
            deps: ['angular']
        },
        'ui-bootstrap':{
            deps:['angular']
        },
        'angular-translate-loader-static-files':{
            deps:['angular-translate']
        },
        'angular-translate-storage-cookies':{
            deps:['angular-translate']
        },
        'angular-translate-storage-local':{
            deps:['angular-translate']
        },
        'ngStorage':{
            deps:['angular']
        },
        'ngAnimate':{
            deps:['angular']
        },
        'angular-cookies':{
            deps:['angular']
        },
        'ngMock':{
            deps:['angular']
        },
        'jsonlint':{
            deps:['jquery']
        },
        'Layer':{
            deps:['jquery'],
            exports:'Layer'
        },
        'linedtextarea':{
            deps:['jquery']
        }
    },
    "deps":[
        'angular'
    ],
    "urlArgs": "bust=" +1  //防止读取缓存，调试用
});
//手动启动ng
require([
    'angular',
    'app'
], function (angular) {
    'use strict';
    //使用bootstrap方法启动Angular应用
   angular.bootstrap(document, ["webApp"]);
});
