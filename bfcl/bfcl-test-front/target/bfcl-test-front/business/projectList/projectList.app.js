/**
 \* Created by plume with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/11/2016
 \*Time:2.32 PM
 \*Description:程序入口,依赖声明
 */


define([
    'angular',
    'business/projectList/projectList.distProjectListDir',
    "bootstrap",
    "business/library/zTree_v3-master/js/jquery.ztree.all",
    "ui-bootstrap"
], function (angular,distProjectListDir) {
    'use strict';
    var distComProjectList= angular.module('dist.com.projectList',[
        'ui.bootstrap'
    ]);
    distComProjectList.directive('distProjectList',distProjectListDir);
    return distComProjectList;
});