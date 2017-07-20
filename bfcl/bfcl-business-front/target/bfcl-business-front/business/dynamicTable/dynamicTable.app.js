/**
 * Created by Swing on 2016/10/31.
 */
define([
    'angular',
    'business/dynamicTable/dynamicTable.disDynamicTableDir',
],function(angular,disDynamicTableDir){
    'use strict';
    var disComDynamicTable=angular.module('dist.com.dynamicTable',[

    ]);
    disComDynamicTable.directive('distDynamicTable',disDynamicTableDir);
    return disComDynamicTable;
});