/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/2/2016
 \*Time:1:08 PM
 \*Description:程序入口,依赖声明
 */


define([
    'angular',
    'business/buttonGroup/buttonGroup.buttonGroupDir',
    'business/buttonGroup/buttonGroup.hideOverflowDir',
], function (angular,buttonGroupDir,hideOverflowDir) {
    'use strict';
    var distButtonGroup= angular.module('dist.com.buttonGroup',[


    ]);
    distButtonGroup.directive('distButtonGroup',buttonGroupDir);
    distButtonGroup.directive('hideOverflow',hideOverflowDir);
    return distButtonGroup;
});   