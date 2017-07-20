/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/2/2016
 \*Time:1:08 PM
 \*Description:程序入口,依赖声明
 */


define([
    'angular',
    'business/headerTab/headerTab.headerTabDir',
    'business/headerTab/headerTabConstant',
    'business/headerTab/headerTabFilter',
    'business/headerTab/headerTab.stateReload.serv'
], function (angular,headerTabDir,headerTabConstant,headerTabFilter,stateReloadService) {
    'use strict';
    var distComSidebar= angular.module('dist.com.headerTab',[

    ]);
    distComSidebar.directive('distHeaderTab',headerTabDir);
    distComSidebar.constant("HeaderTabEvent",headerTabConstant.HeaderTabEvent);
    distComSidebar.filter("HeaderTabNameFilter",headerTabFilter);
    distComSidebar.factory('stateReloadService',stateReloadService);
    return distComSidebar;
});   