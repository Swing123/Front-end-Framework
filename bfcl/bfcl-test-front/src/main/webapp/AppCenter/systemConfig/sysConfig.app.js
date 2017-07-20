/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:2016/10/17
 \*Time:15:53
 \*Description:
 */
define([
    'angular',
    'AppCenter/systemConfig/js/sys.systemConfigController'
], function (angular,systemConfigController) {
    'use strict';
    var sysConfigApp=angular.module('sysConfig.app',[

    ]);

    sysConfigApp.controller('SystemConfigController',systemConfigController);

    return sysConfigApp;
});