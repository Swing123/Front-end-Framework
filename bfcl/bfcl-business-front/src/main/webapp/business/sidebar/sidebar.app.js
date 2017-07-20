/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/2/2016
 \*Time:1:08 PM
 \*Description:程序入口,依赖声明
 */


define([
    'angular',
    'business/sidebar/sidebar.distSidebarDir',
], function (angular,distSidebarDir) {
    'use strict';
    var distComSidebar= angular.module('dist.com.sidebar',[

    ]);
    distComSidebar.directive('distSidebar',distSidebarDir);
    return distComSidebar;
});   