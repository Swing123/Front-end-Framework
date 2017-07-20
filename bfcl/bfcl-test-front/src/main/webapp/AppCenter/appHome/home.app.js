/**
 * Created by Swing on 2016/11/29 .
 */
define([
    'angular',
    'AppCenter/appHome/js/home.homeController'
],function(angular,homeController){
    'use strict';
    var homeApp=angular.module('home.app',[
        'common.app',
        'dist.component'
    ]);
    homeApp.controller('homeController',homeController);
    return homeApp;
});