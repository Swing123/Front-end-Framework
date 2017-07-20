/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:2016/10/5
 \*Time:21:49
 \*Description:
 */
define([
    'angular',
    'AppCenter/componentsTest/js/comTableOtherController',
    'AppCenter/componentsTest/js/comLogController',
    'AppCenter/componentsTest/js/comTabController',
    'AppCenter/componentsTest/js/comTableUiGridController',
    'AppCenter/componentsTest/js/comTreeController',
    'AppCenter/componentsTest/js/comButtonGroupController',//button组测试controller
    'AppCenter/componentsTest/js/comInfoController',
    'AppCenter/componentsTest/js/comTreeSelectController',
    'AppCenter/componentsTest/js/comProjectListController',//项目列表测试controller
    'AppCenter/componentsTest/js/comBoardController',
    'business/components.app'
],function(angular,comTableController,comLogController,comTabController,comTableUiGridController,comTreeController,comButtonGroupController,comInfoController,comTreeSelectController,comProjectListController,comBoardController){
    'use strict';
    var componentsTest=angular.module('componentsTest.app', [
            'dist.component'//业务组件
    ]);
    componentsTest.controller('comTableController',comTableController);
    componentsTest.controller('comLogController',comLogController);
    componentsTest.controller('comTabController',comTabController);
    componentsTest.controller('UiGridDemo3Ctrl',comTableUiGridController);
    componentsTest.controller('comTreeController',comTreeController);
    componentsTest.controller('comButtonGroupController',comButtonGroupController);
    componentsTest.controller('comInfoController',comInfoController);
    componentsTest.controller('comTreeSelectController',comTreeSelectController);
    componentsTest.controller('comProjectListController',comProjectListController);//项目列表测试controller
    componentsTest.controller('comBoardController',comBoardController);
    return componentsTest;
});