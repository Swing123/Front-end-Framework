/**
 * Created by Swing on 2016/11/15 .
 */
define([
    'angular',
    'business/log/log.distLogDir'
],function(angular,distLogDir){
    'use strict';
    var disComLog=angular.module('dist.com.log',[

    ]);
    disComLog.directive('distCircLog',distLogDir);
    return disComLog;
});