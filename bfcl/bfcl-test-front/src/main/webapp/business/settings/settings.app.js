/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/2/2016
 \*Time:1:13 PM
 \*Description:程序入口,依赖声明
 */


define([
    'angular',
    'business/settings/settings.distSettingsDir',

], function (angular,distSettingsDir) {
    'use strict';
    var distComSettings= angular.module('dist.com.settings',[

    ]);
    distComSettings.directive('distSettings',distSettingsDir);
    return distComSettings;
});   