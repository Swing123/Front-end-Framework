/**
 * Created by wanghy on 2016/11/23.
 */
define([
    'angular',
    'business/treeSelect/treeSelect.distTreeSelectDir',
], function (angular, distTreeSelectDir) {
    'use strict';
    var distComTreeSelect = angular.module('dist.com.treeSelect',[

    ]);
    distComTreeSelect.directive('distTreeSelect',distTreeSelectDir);

    return distComTreeSelect;
});