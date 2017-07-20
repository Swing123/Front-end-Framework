/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/2/2016
 \*Time:12:51 PM
 \*Description:程序入口,依赖声明
 */

define([
    'angular',
    'business/footer/footer.distFooterDir'
], function (angular,distFooterDir) {
    'use strict';
    var distComFooter=angular.module('dist.com.footer',[

    ]);
    distComFooter.directive('distFooter',distFooterDir);
    return distComFooter;
});   