/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/2/2016
 \*Time:12:58 PM
 \*Description:程序入口,依赖声明
 */

define([
    'angular',
    'business/header/header.distComHeaderDir',
    'business/header/header.typeaheadDemoCtrl',

], function (angular,distComHeaderDir,typeaheadDemoCtrl) {
    'use strict';
    var distComHeader= angular.module('dist.com.header',[

    ]);
    distComHeader.directive('distHeader',distComHeaderDir);
    distComHeader.controller('TypeaheadDemoCtrl',typeaheadDemoCtrl);
    return distComHeader;
});
