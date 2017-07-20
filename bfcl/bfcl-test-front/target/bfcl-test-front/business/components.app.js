/**
 \* Created by Wanggb with IntelliJ IDEA.
 \*Orgs:DIST
 \*Date:2016/10/3
 \*Time:13:51
 \*Description:
 */

define([
    'angular',
    'business/footer/footer.app',//footer
    'business/header/header.app',//header
    'business/sidebar/sidebar.app',//sidebar
    'business/settings/settings.app',//settings
    'business/dynamicTable/dynamicTable.app',//dynamicTable
    'business/log/log.app',//流转日志
    'business/headerTab/headerTab.app',//流转日志
    // 'business/projectList/projectList.app',//business
    'business/buttonGroup/buttonGroup.app',//business
    'business/info/info.app',//信息条
    'business/tree/tree.app',
    'business/treeSelect/treeSelect.app',
    'business/itemLists/itemList.app',
    'business/board/board.app',
    'business/carousel/carousel.app'
    // 'business/treeActionable/treeActionable.app',
], function (angular) {
    'use strict';
    var distComponents=angular.module('dist.component', [
        'dist.com.sidebar',//业务组件-侧边导航栏
        'dist.com.settings',//业务组件-设置面板
        'dist.com.footer',//业务组件-footer
        'dist.com.header',//业务组件-header
        'dist.com.dynamicTable',//业务组件-多样式table表
        'dist.com.log',//业务组件-流转日志
        'dist.com.headerTab',//业务组件-tab页
        // 'dist.com.projectList',//业务组件-projectList
        'dist.com.buttonGroup',//业务组件-projectList
        'dist.com.info',//业务组件-信息条
        'dist.com.tree',
        'dist.com.treeSelect',//多级选择树状下拉列表
        'dist.com.itemList',//项目列表
        'dist.com.board',//公告面板
        'dist.com.carousel'
        // 'dist.com.treeActionable',
    ]);
    return distComponents;
});
