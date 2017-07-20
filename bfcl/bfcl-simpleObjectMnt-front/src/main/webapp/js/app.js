/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:11/1/2016
 \*Time:1:57 PM
 \*Description:程序入口,依赖声明
 */


(function (window, angular, undefined) {
    'use strict';
    var app = angular
        .module('AceApp', [
            'ui.bootstrap',
            'ngSanitize',
            'ngTouch',
            'ui.router',
            'ngStorage',
            "ui.grid.pagination",
            'ng-fusioncharts',
            'ace.directives',
            'dist.data.service',
            'dist.ui',
            'dist.ui.grid.lib'
            // , 'myMockE2E'
            // , 'ngMockE2E'
        ])
    angular.module('dist.ui.grid.lib', ['ui.grid.resizeColumns', 'ui.grid.moveColumns', 'ui.grid.selection', 'ui.grid.autoResize']);

})(window, window.angular);