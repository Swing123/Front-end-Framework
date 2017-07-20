/**
 * Created by Swing on 2016/11/24 .
 */
define([
    'angular',
    'business/info/info.distInfoDir'
],function(angular,distInfoDir){
   'use strict';
    var distComInfo=angular.module('dist.com.info',[

    ]);
    distComInfo.directive('distInfo',distInfoDir);
    return distComInfo;
});