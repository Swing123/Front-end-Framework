/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:2016/10/5
 \*Time:21:49
 \*Description:
 */
define([
    'angular',
    'angular-ui-layout',//第三方布局插件layout
    'angular-tree-dnd',//第三方布局插件angular tree
    'AppCenter/appApprove/js/approve.onHandlingBox.ctrl',//在办箱
    'AppCenter/appApprove/js/approve.handled.ctrl',//已办箱
    'AppCenter/appApprove/js/approve.itemForm.ctrl',//项目表单
    'AppCenter/appApprove/js/approve.new.ctrl',//新建
    'AppCenter/appApprove/js/approve.continue.ctrl',//续办页面
    'AppCenter/appApprove/js/approve.projectQuery.ctrl',//项目查询
    'AppCenter/appApprove/js/directive/approve.eleResize.dir'//页面尺寸变化装饰指令
],function(angular,UILayout,UITreeDnd,onHandlingBoxController,appApproveHandledController,approveItemFormController,approveNewController,approveContinueController,approveProjectQueryController,approveEleResizeDirective){
    'use strict';
    var approveApp=angular.module('approve.app', [
            'common.app',//公共模块
            'auth.app',//权限认证模块
            'dist.component',//业务组件
            'ui.layout',//第三方布局插件
            'ntt.TreeDnD',//第三方布局插件
            'ui.grid',//ui-grid表单module
            'ui.grid.selection',//ui-grid行选择
            'ui.grid.resizeColumns',//ui-grid改变列宽
            'ui.grid.pagination',//ui-grid 翻页
            'ui.grid.moveColumns'//ui-grid列移动
    ]);
    approveApp.controller('onHandlingBoxController',onHandlingBoxController);//在办箱控制器
    approveApp.controller('appApproveHandledController',appApproveHandledController);//已办箱控制器
    approveApp.controller('approveItemFormController',approveItemFormController);//表单处理页面控制器
    approveApp.controller('approveNewController',approveNewController);//新建页面控制器
    approveApp.controller('approveContinueController',approveContinueController);//续办页面控制器
    approveApp.controller('approveProjectQueryController',approveProjectQueryController);//项目查询控制器
    approveApp.directive('eleResize',approveEleResizeDirective);//项目查询控制器
    return approveApp;
});