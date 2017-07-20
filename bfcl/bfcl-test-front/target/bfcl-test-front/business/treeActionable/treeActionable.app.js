/**
 * Created by wanghy on 2016/11/24.
 */
define([
    'angular',
    'business/treeActionable/treeActionable.distTreeActionableDir',
    'business/treeActionable/treeActionable.fileReadDir',
],function(angular,distTreeActionableDir, fileReadDir){
    'use strict';
    var disTreeActionable=angular.module('dist.com.treeActionable',[
    ]);
    disTreeActionable.directive('distTreeActionable',distTreeActionableDir);
    disTreeActionable.directive('fileRead',fileReadDir);
    return disTreeActionable;
});