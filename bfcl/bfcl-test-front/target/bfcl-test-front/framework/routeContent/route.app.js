/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:12/2/2016
 \*Time:2:00 PM
 \*Description:程序入口,依赖声明
 */

define([
    'angular',
    'framework/routeContent/route.content.ctrl',
    'framework/routeContent/route.stateReload.serv',
], function (angular,routeContentController,routeStateReloadService) {
    'use strict';
    var routeContent=angular.module('framework.route.content',[
        'ui.router',//路由
    ]);
    routeContent.controller('routeContentController',routeContentController);
    routeContent.factory('stateReloadService',routeStateReloadService);
    return routeContent;
});   